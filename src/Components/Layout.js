import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout