import Nav from "../components/Nav";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Locations = () => {
    return (
        <>
            <Nav />
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