import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import Loading from "./components/Layout/Loading";
import Film from "./pages/Admin/Films";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPage from "./pages/Admin";
import AddNewFilm from "./pages/Admin/AddNewFilm";
import EditFilm from "./pages/Admin/EditFilm";
import Profile from "./pages/Profile";

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Loading />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/checkout/:id" element={<Checkout />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/admin" element={<AdminPage />}>
          <Route path="films" element={<Film />}>
            <Route path="edit-film/:id" element={<EditFilm />} />
          </Route>
          <Route path="add-new-film" element={<AddNewFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
