import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../../contexts/product-context";
import { ClipLoader } from "react-spinners";

export const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const { productState, productDispatch } = useProduct();

  useEffect(() => {
    (async function getCategoriesData() {
      const res = await axios.get("api/categories");
      setCategoryData(res.data.categories);
    })();
  }, []);

  return (
    <div>
      <h2 className="text-center pt-1">Categories</h2>
      <div className="underline"></div>

      <section className="flex categories-width pt-1">
        {productState.loading && <ClipLoader />}
        {!productState.loading &&
          categoryData.map((category) => {
            const { _id, image, categoryName } = category;
            return (
              <div
                className="card card-width"
                key={_id}
                onClick={() =>
                  productDispatch({
                    type: "INDIVIDUAL_CATEGORY",
                    payload: categoryName,
                  })
                }
              >
                <div className="img-overlay">
                  <Link to="/products">
                    <img
                      className="img img-dimensions"
                      src={image}
                      alt="category"
                    />
                    <div className="text-overlay">
                      <div className="p-1">
                        <h3>{categoryName}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </section>

      <hr className="hr" />
    </div>
  );
};
