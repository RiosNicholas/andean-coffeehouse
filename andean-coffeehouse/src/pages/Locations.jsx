import { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";
import Location from "../components/Location";
import Footer from "../components/Footer";
import coverImage from "../assets/pexels-julie-aagaard-2467287.jpg"

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get("http://localhost/api/index.php?locations=true");
                setLocations(response.data);
            } catch (error) {
                setError("Failed to fetch locations");
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <>
            <Nav />
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="Inside a coffee shop"
            />
            <h1 className="mx-10 my-4 text-3xl font-extrabold uppercase">Locations</h1>
            <div className="flex justify-center items-center w-full">
                <main className="grid md:grid-cols-2 gap-4 lg:gap-10">
                    {locations.map((location, index) => (
                        <Location 
                            key={index}
                            city={location.city} 
                            state={location.state}
                            address={location.address}
                            phoneNumber={location.phoneNumber}
                        />  
                    ))}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Locations;