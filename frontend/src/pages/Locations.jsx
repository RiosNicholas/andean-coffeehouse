import Nav from "../components/Nav";
import Location from "../components/Location";
import Footer from "../components/Footer";
import coverImage from "../assets/pexels-julie-aagaard-2467287.jpg"

const Locations = () => {
    return (
        <>
            <Nav />
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="Inside a coffee shop"
            />
            <Location 
                city='Elizabeth' 
                state='New Jersey'
                address='123 ABC Street'
                phoneNumber='911'
            />
            <Footer />
        </>
    );
}

export default Locations;