import Home from "./Router/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";
import SignIn from "./Router/Sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
