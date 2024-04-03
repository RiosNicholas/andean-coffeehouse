import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-igor-haritanovich-1695052.jpg"

const About = () => {
    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="A barista pouring latte art"
            />
            <Footer />
        </>
    );
}

export default About;