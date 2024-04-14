import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-afta-putta-gunawan-683039.jpg"

const Blog = () => {
    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="A coffee shop"
            />
            <Footer/>
        </>
    );
}

export default Blog;