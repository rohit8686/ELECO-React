import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context";
import { toastContainer } from "../Toast/toast";

const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialAddressState = {
    addresses: [],
    editAddress: {
      firstName: "",
      lastName: "",
      city: "",
      email: "",
      phone: "",
      pincode: "",
      state: "",
      type: "Home",
      address: "",
    },
    addressError: "",
    selectedAddress: "",
  };

  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialAddressState
  );
  const {
    authState: { userData, encodedToken },
  } = useAuth();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("userToken")) {
        const localStorageAddress = JSON.parse(
          localStorage.getItem("userData")
        ).address;
        if (localStorageAddress) {
          addressDispatch({
            type: "ADDRESS_DATA",
            payload: localStorageAddress,
          });
        } else {
          try {
            const res = await axios.get("/api/user/address", {
              headers: { authorization: encodedToken },
            });
            addressDispatch({
              type: "ADDRESS_DATA",
              payload: res.data.address,
            });
            localStorage.setItem(
              "userData",
              JSON.stringify({ ...userData, address: res.data.address })
            );
          } catch (e) {
            addressDispatch({
              type: "ADDRESS_ERROR",
              payload: "Failed to load Address",
            });
            console.log("Address load error is", e);
          }
        }
      } else {
        navigate("/login");
      }
    })();
  }, [localStorage.getItem("userToken")]);

  function addressReducer(addressState, action) {
    switch (action.type) {
      case "ADDRESS_INPUT":
        const attribute = action.payload.attribute;
        const value = action.payload.value;
        return {
          ...addressState,
          editAddress: { ...addressState.editAddress, [attribute]: value },
        };
      case "ADDRESS_DATA":
        return { ...addressState, addresses: action.payload };
      case "SELECTED_ADDRESS":
        return { ...addressState, selectedAddress: action.payload };
      case "DUMMY_ADDRESS":
        return {
          ...addressState,
          editAddress: {
            firstName: "John",
            lastName: "Smith",
            city: "Bangalore",
            email: "john@gmail.com",
            phone: "123456789",
            pincode: "540441",
            state: "Karnataka",
            type: "Home",
            address: "Dno : 13-22-3/2, Opposite Cricket Stadium",
          },
        };
      case "ADDRESS_ERROR":
        return { ...addressState, addressError: action.payload };
      case "CLEAR_ADDRESS":
        return {
          ...addressState,
          editAddress: initialAddressState.editAddress,
        };
      default:
        return { ...addressState };
    }
  }

  const addAddress = async () => {
    if (localStorage.getItem("userToken")) {
      try {
        const res = await axios.post(
          "/api/user/address",
          { address: addressState.editAddress },
          { headers: { authorization: encodedToken } }
        );
        addressDispatch({ type: "ADDRESS_DATA", payload: res.data.address });
        localStorage.setItem(
          "userData",
          JSON.stringify({ ...userData, address: res.data.address })
        );
        toastContainer("Address added", "success");
        addressDispatch({ type: "CLEAR_ADDRESS" });
      } catch (e) {
        addressDispatch({
          type: "ADDRESS_ERROR",
          payload: "Failed to add to Address",
        });
        console.log("Address error is", e);
      }
    } else {
      navigate("/login");
    }
  };
  const deleteAddress = async (_id) => {
    try {
      const res = await axios.delete(`/api/user/address/${_id}`, {
        headers: { authorization: encodedToken },
      });
      addressDispatch({ type: "ADDRESS_DATA", payload: res.data.address });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...userData,
          address: res.data.address,
        })
      );
      if (_id === addressState.selectedAddress._id) {
        addressDispatch({
          type: "SELECTED_ADDRESS",
          payload: "",
        });
      }
      toastContainer("Address deleted", "info");
    } catch (e) {
      console.log(e);
      addressDispatch({
        type: "Address_ERROR",
        payload: "Failed to remove from Address",
      });
    }
  };
  const addressSelected = (_id) => {
    const selectedAddress = addressState.addresses.find(
      (address) => address._id === _id
    );
    addressDispatch({
      type: "SELECTED_ADDRESS",
      payload: selectedAddress,
    });
  };
  const dummyAddress = () => {
    addressDispatch({ type: "DUMMY_ADDRESS" });
  };

  return (
    <AddressContext.Provider
      value={{
        addressState,
        addressDispatch,
        addAddress,
        deleteAddress,
        addressSelected,
        dummyAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressProvider, useAddress };
