import { useProduct } from "../../../contexts/product-context";

export function Filters() {
  const { productState, productDispatch } = useProduct();
  return (
    <aside className="aside-filter p-1">
      <div className="flex space-between">
        <h3>Filters</h3>
        <p
          className="clear-filter"
          onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear
        </p>
      </div>
      <hr className="hr" />
      <h3 className="pb-1">Price</h3>
      <div className="flex space-between">
        <h6>1000</h6>
        <h6>200000</h6>
      </div>
      <input
        style={{ width: "100%" }}
        type="range"
        name="slider"
        id="slider"
        min="1000"
        max="200000"
        step="2000"
        value={productState.price}
        onChange={(e) =>
          productDispatch({ type: "PRICE", payload: e.target.value })
        }
      />
      <p>0-{productState.price}</p>
      <h3 className="pt-1 pb-1">Category</h3>

      <div>
        <input
          type="checkbox"
          name="laptops"
          id="laptops"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "Laptops" })
          }
          checked={productState.categories.includes("Laptops") ? true : false}
        />
        <label htmlFor="laptops">Laptops</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="smartphones"
          id="smartphones"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "Smart phones" })
          }
          checked={
            productState.categories.includes("Smart phones") ? true : false
          }
        />
        <label htmlFor="smartphones">Smart phones</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="dslr"
          id="dslr"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "DSLR" })
          }
          checked={productState.categories.includes("DSLR") ? true : false}
        />
        <label htmlFor="dslr">DSLR</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="keyboards"
          id="keyboards"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "Keyboards" })
          }
          checked={productState.categories.includes("Keyboards") ? true : false}
        />
        <label htmlFor="keyboards">Keyboards</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="mouse"
          id="mouse"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "Mouse" })
          }
          checked={productState.categories.includes("Mouse") ? true : false}
        />
        <label htmlFor="mouse">Mouse</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="headphones"
          id="headphones"
          onChange={() =>
            productDispatch({ type: "CATEGORY", payload: "Headphones" })
          }
          checked={
            productState.categories.includes("Headphones") ? true : false
          }
        />
        <label htmlFor="headphones">Headphones</label>
      </div>

      <h3 className="pt-1 pb-1">Rating</h3>

      <div>
        <input
          type="radio"
          name="rating"
          id="above4"
          className="rating"
          onChange={() => productDispatch({ type: "RATING", payload: 4 })}
          checked={productState.rating === 4}
        />
        <label htmlFor="above4">4 Stars and above</label>
      </div>

      <div>
        <input
          type="radio"
          name="rating"
          id="above3"
          onChange={() => productDispatch({ type: "RATING", payload: 3 })}
          checked={productState.rating === 3}
        />
        <label htmlFor="above3">3 Stars and above</label>
      </div>
      <div>
        <input
          type="radio"
          name="rating"
          id="above2"
          onChange={() => productDispatch({ type: "RATING", payload: 2 })}
          checked={productState.rating === 2}
        />
        <label htmlFor="above2">2 Stars and above</label>
      </div>

      <div>
        <input
          type="radio"
          name="rating"
          id="above1"
          onChange={() => productDispatch({ type: "RATING", payload: 1 })}
          checked={productState.rating === 1}
        />
        <label htmlFor="above1">1 Star and above</label>
      </div>

      <h3 className="pt-1 pb-1">Sort By</h3>
      <div>
        <input
          type="radio"
          name="sort"
          id="lowtohigh"
          onChange={() =>
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
          }
          checked={productState.sort === "LOW_TO_HIGH"}
        />
        <label htmlFor="lowtohigh">Price - Low to High</label>
      </div>
      <div>
        <input
          type="radio"
          name="sort"
          id="hightolow"
          onChange={() =>
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
          }
          checked={productState.sort === "HIGH_TO_LOW"}
        />
        <label htmlFor="hightolow">Price - High to Low</label>
      </div>
    </aside>
  );
}
