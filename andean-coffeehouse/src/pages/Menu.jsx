import { useState, useEffect } from "react";
import axios from 'axios';

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-lisa-fotios-1855214.jpg"

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get("http://localhost/api/index.php");
                setMenuItems(response.data);
            } catch (error) {
                setError("Failed to fetch menu items");
            }
        };

        fetchMenuItems();
    }, []);

    

    if (!Array.isArray(menuItems)) {
        console.error("menuItems is not an array:", menuItems);
        return null; 
    }

    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="Menus on the wall at a coffee shop"
            />
            <h1 className="mx-10 my-4 text-3xl font-extrabold uppercase">Menu</h1>
            <div>
                {error && <p>{error}</p>}
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <p>{item.product_name}</p>
                            <p>{item.flavor_description}</p>
                            <p>{item.unit_price}</p>
                            <p>{item.origin}</p>
                            <p>{item.drink_type}</p>
                            <p>{item.bean_type}</p>
                            <p>{item.roast}</p>
                        </li>
                    ))}
                </ul>
            </div>
          
            <Footer />
        </>
    );
}

export default Menu;