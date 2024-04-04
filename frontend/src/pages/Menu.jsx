import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-lisa-fotios-1855214.jpg"

const Menu = () => {
    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="Menus on the wall at a coffee shop"
            />
            <Footer />
        </>
    );
}

export default Menu;