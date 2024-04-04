import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-chevanon-photography-302899.jpg"

const Contact = () => {
    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="A barista pouring latte art"
            />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;