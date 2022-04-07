import { ToastContainer } from "react-toastify";
import "../../styling/productspage.css";
import { Filters, Products } from "./components/common-exports";

export function ProductsPage() {
  return (
    <div className="flex no-wrap no-gap space-between">
      <Filters />
      <Products />
      <ToastContainer />
    </div>
  );
}
