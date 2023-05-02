import Navigation from '../components/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <>
      <section>
        <Navigation />
      </section>

      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
