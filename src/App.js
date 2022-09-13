import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Suspense, lazy } from 'react';
import Loading from './components/Layout/Loading';
import LoadingIcon from './components/SpinnerLoading';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const AdminPage = lazy(() => import('./pages/Admin'));
const FilmManagement = lazy(() => import('./pages/Admin/FilmManagement'));
const UserManagement = lazy(() => import('./pages/Admin/UserManagement'));

export const history = createBrowserHistory();
function App() {
    return (
        <Suspense fallback={<LoadingIcon />}>
            <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
                <Loading />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/detail/:id" element={<Detail />}></Route>
                    <Route path="/checkout/:id" element={<Checkout />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/admin" element={<AdminPage />}>
                        <Route path="film-management" element={<FilmManagement />} />
                        <Route path="user-management" element={<UserManagement />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}
export default App;
