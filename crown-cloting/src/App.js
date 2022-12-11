import Home from "./Router/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import Auth from "./Router/Authentication/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
