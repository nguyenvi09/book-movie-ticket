import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeTemplate;
