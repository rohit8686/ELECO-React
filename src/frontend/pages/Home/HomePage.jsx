import "../../styling/homepage.css";
import { Categories, Hero, NewArrivals } from "./components/common-export";

export function HomePage() {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
    </div>
  );
}
