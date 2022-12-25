import Home from "./Router/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import Auth from "./Router/Authentication/Auth";
import ShopComponent from "./Router/Shop/ShopComponent";
import CheckOut from "./Components/CheckOutComponent/CheckOut";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
