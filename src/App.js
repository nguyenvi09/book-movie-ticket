import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Layout/Loading";
import Dashboard from "./pages/Admin/Dashboard";
import Film from "./pages/Admin/Films";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPage from "./pages/Admin";
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

        <Route path="/admin" element={<AdminPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="films" element={<Film />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
