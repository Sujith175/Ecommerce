import Home from "./Router/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Router/Navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
