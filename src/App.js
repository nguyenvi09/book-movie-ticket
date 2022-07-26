import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Layout/Loading";
// import Dashboard from "./pages/Admin/Dashboard";
// import Film from "./pages/Admin/Films";
// import Showtime from "./pages/Admin/Showtime";
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

        {/* <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/films" element={<Film />} />
        <Route path="/admin/showtime/:id/:tenphim" element={<Showtime />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
