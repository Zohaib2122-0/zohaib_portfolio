
import { Navv } from './reuseable/Navv';
import Footer from './reuseable/Footer';


const Layout = ({ children }) => {


  return (
    <div>
      <Navv />
      <main>

        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

