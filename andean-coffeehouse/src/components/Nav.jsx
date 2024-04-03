import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex p-5 bg-yellow-50 text-gray-900 justify-between sticky top-0">
            <label className="font-extrabold mx-5">Andean Coffeehouse</label>
            <ul className="list-none flex font-light mx-5">
                <li className="px-2 hover:underline hover:cursor-pointer">
                    <Link to="/">Home</Link>    
                </li>
                <li className="mx-2 hover:underline hover:cursor-pointer">
                    <Link to="/about">Our Story</Link>
                </li>
                <li className="mx-2 hover:underline hover:cursor-pointer">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="mx-2 hover:underline hover:cursor-pointer">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="mx-2 hover:underline hover:cursor-pointer">
                    <Link to="/locations">Locations</Link>
                </li>
                <li className="mx-2 hover:underline hover:cursor-pointer">
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;