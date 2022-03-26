import React from "react";
import img from "../../../images/img.jpg";
import { Link } from "react-router-dom";
import { useProduct } from "../../../contexts/product-context";

export const Hero = () => {
  const { productDispatch } = useProduct();
  return (
    <div>
      <section>
        <img src={img} className="main-img" alt="gadgets" />
        <div className="flex">
          <Link to="/products">
            <button
              className="btn btn-error btn-left"
              onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
            >
              Our Products
            </button>
          </Link>

          <a href="#new-arrivals">
            <button className="btn btn-primary btn-right">New Arrivals</button>
          </a>
        </div>
      </section>

      <hr className="hr" />
    </div>
  );
};
