import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';

const HomeTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeTemplate;
