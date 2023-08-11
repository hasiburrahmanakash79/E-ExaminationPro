import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Navbar />
           <Outlet />
           <Footer />
        </div>
    );
};

export default Main;