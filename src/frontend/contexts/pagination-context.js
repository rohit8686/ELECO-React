import { createContext, useContext, useReducer, useEffect } from "react";
import { useProduct } from "./hooks-export";

const PaginationContext = createContext();
const usePagination = () => useContext(PaginationContext);

const PaginationProvider = ({ children }) => {
  const productsPerPage = 6;
  const { filteredData } = useProduct();
  const paginationCount = Math.ceil(filteredData.length / productsPerPage);
  const initialState = {
    currentPage: 1,
  };

  useEffect(() => {
    paginationDispatch({ type: "CURRENT_PAGE", payload: 1 });
  }, [filteredData]);

  const [paginationState, paginationDispatch] = useReducer(
    PaginationReducer,
    initialState
  );

  const getPaginatedData = () => {
    const { currentPage } = paginationState;
    const startIndex = productsPerPage * (currentPage - 1);
    const endIndex = currentPage * productsPerPage - 1;
    return filteredData.slice(startIndex, endIndex + 1);
  };
  const nextPage = () => {
    let { currentPage } = paginationState;
    if (currentPage + 1 >= paginatedData.length) {
      currentPage = 1;
    } else {
      ++currentPage;
    }
    paginationDispatch({ type: "NEXT_PAGE", payload: currentPage });
  };
  const prevPage = () => {
    let { currentPage } = paginationState;
    if (currentPage - 1 <= 0) {
      currentPage = paginationCount;
    } else {
      --currentPage;
    }
    paginationDispatch({ type: "PREV_PAGE", payload: currentPage });
  };

  const paginatedData = getPaginatedData();

  function PaginationReducer(paginationState, action) {
    switch (action.type) {
      case "CURRENT_PAGE":
        return { ...paginationState, currentPage: action.payload };
      case "NEXT_PAGE":
        return { ...paginationState, currentPage: action.payload };
      case "PREV_PAGE":
        return { ...paginationState, currentPage: action.payload };
      default:
        return { ...paginationState };
    }
  }

  return (
    <PaginationContext.Provider
      value={{
        paginationState,
        paginationDispatch,
        paginatedData,
        productsPerPage,
        paginationCount,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationProvider, usePagination };
