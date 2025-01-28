import CartPage from "./cart/page";
import ChefCards from "./components/chef";
import Doc from "./components/Document";
import Extra from "./components/Extr";
import Fodo from "./components/fodo";
import Food from "./components/food";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Fodo />
      <Extra />
      <Menu />
      <ChefCards />
      <Doc />
      <Food />
      <CartPage />
    </div>
  );
}
