import { useState, useEffect } from "react";
import axios from 'axios';

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import MenuItem from "../components/MenuItem";
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
            <div className="flex justify-center items-center">
                {error && <p>{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            product_name={item.product_name}
                            flavor_description={item.flavor_description}
                            unit_price={item.unit_price}
                            origin={item.origin}
                            drink_type={item.drink_type}
                            bean_type={item.bean_type}
                            roast={item.roast}
                        />
                    ))}
                  
                </div>
            </div>
          
            <Footer />
        </>
    );
}

export default Menu;