import React from "react";
import { usePagination } from "../contexts/hooks-export";

export const Pagination = () => {
  const {
    paginationState: { currentPage },
    paginationCount,
    paginationDispatch,
    prevPage,
    nextPage,
  } = usePagination();

  return (
    <div className="flex pt-1">
      <span className="material-icons-outlined icon" onClick={prevPage}>
        keyboard_arrow_left
      </span>
      {Array.apply(null, Array(paginationCount)).map((item, index) => (
        <button
          key={index}
          className={`btn ${
            index + 1 === currentPage ? "btn-primary" : "btn-error"
          }`}
          onClick={(e) =>
            paginationDispatch({
              type: "CURRENT_PAGE",
              payload: index + 1,
            })
          }
        >
          {index + 1}
        </button>
      ))}
      <span className="material-icons-outlined icon" onClick={nextPage}>
        navigate_next
      </span>
    </div>
  );
};
