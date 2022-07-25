import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Layout/Loading";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/checkout/:id" element={<Checkout />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
