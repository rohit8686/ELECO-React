import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const initialProductState = {
  loading: true,
  searchText: "",
  categories: [],
  rating: "",
  sort: "",
  price: 70000,
};
const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  const productReducerFn = (productState, action) => {
    switch (action.type) {
      case "CLEAR_FILTER":
        return {
          ...productState,
          searchText: "",
          categories: [],
          rating: "",
          sort: "",
          price: 70000,
        };
      case "PRICE":
        return { ...productState, price: action.payload };
      case "CATEGORY":
        if (productState.categories.includes(action.payload)) {
          const modifiedCategories = productState.categories.filter(
            (category) => category !== action.payload
          );
          return { ...productState, categories: modifiedCategories };
        }
        return {
          ...productState,
          categories: [...productState.categories, action.payload],
        };
      case "INDIVIDUAL_CATEGORY":
        return {
          ...productState,
          categories: [action.payload],
        };
      case "RATING":
        return { ...productState, rating: action.payload };
      case "SORT":
        return { ...productState, sort: action.payload };
      case "SEARCH_TEXT":
        navigate("/products");
        return { ...productState, searchText: action.payload };
      case "DATA_LOADED":
        return { ...productState, loading: false };
      default:
        return { ...productState };
    }
  };
  const [productState, productDispatch] = useReducer(
    productReducerFn,
    initialProductState
  );

  function getCategoryData(productState, productsData) {
    let categoryData = [];
    if (productState.categories.length === 0) {
      return productsData;
    }
    categoryData.push(
      ...productsData.filter((data) =>
        productState.categories.includes(data.category)
      )
    );
    return categoryData;
  }
  function getRatingData(categoryData, productState) {
    let ratingData = [];
    if (productState.rating) {
      ratingData.push(
        ...categoryData.filter((data) => data.rating >= productState.rating)
      );
      return ratingData;
    }
    return categoryData;
  }
  function getSortedData(productState, ratingData) {
    if (productState.sort === "LOW_TO_HIGH") {
      return [...ratingData].sort((a, b) => {
        return (
          Math.round(a.price - (a.discount * a.price) / 100) -
          Math.round(b.price - (b.discount * b.price) / 100)
        );
      });
    } else if (productState.sort === "HIGH_TO_LOW") {
      return [...ratingData].sort((a, b) => {
        return (
          Math.round(b.price - (b.discount * b.price) / 100) -
          Math.round(a.price - (a.discount * a.price) / 100)
        );
      });
    } else {
      return ratingData;
    }
  }
  function getPriceRangeData(productState, sortedData) {
    return [...sortedData].filter(
      (data) =>
        Math.round(data.price - (data.discount * data.price) / 100) <
        productState.price
    );
  }
  const getSearchedData = (productState, priceRangeData) => {
    if (productState.searchText.length === 0) {
      return priceRangeData;
    } else {
      let searchedData = [];
      searchedData = [...priceRangeData].filter((data) => {
        return (
          data.name
            .toLowerCase()
            .includes(productState.searchText.toLowerCase()) ||
          data.category
            .toLowerCase()
            .includes(productState.searchText.toLowerCase())
        );
      });
      return searchedData;
    }
  };

  function getFilteredData(productState, productsData) {
    const categoryData = getCategoryData(productState, productsData);
    const ratingData = getRatingData(categoryData, productState);
    const sortedData = getSortedData(productState, ratingData);
    const priceRangeData = getPriceRangeData(productState, sortedData);
    const searchedData = getSearchedData(productState, priceRangeData);
    return searchedData;
  }
  let filteredData = getFilteredData(productState, productsData);

  useEffect(() => {
    (async () => {
      const url = "/api/products";
      try {
        const res = await axios.get(url);
        setProductsData(res.data.products);
        productDispatch({ type: "DATA_LOADED" });
      } catch (e) {
        console.log(e);
        setProductsData("");
      }
    })();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        filteredData,
        productState,
        productDispatch,
        productsData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, useProduct };
