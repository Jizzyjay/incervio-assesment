import "./App.css";
import Banner from "./components/molecules/Banner";
import Deal from "./components/molecules/Deal";
import Selling from "./components/molecules/Selling";
import Apple from "./components/molecules/Apple";
import Shop from "./components/molecules/Shop";
import SellProd from "./components/molecules/SellProd";
import Categories from "./components/molecules/Categories";
import Viewed from "./components/molecules/Viewed";
import Brand from "./components/atoms/Brand";
import Vendors from "./components/molecules/Vendors";
import Image from "./components/molecules/Image";
import Daily from "./components/molecules/Daily";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <div>
      <Banner />
      <Shop />
      <Deal />
      <SellProd />
      <Selling />
      <Apple />
      <Categories />
      <Viewed />
      <Brand />
      <Vendors />
      <Image />
      <Daily />
      <Footer />
    </div>
  );
}

export default App;
