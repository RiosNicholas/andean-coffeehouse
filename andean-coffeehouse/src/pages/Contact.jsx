import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Contact = () => {
    return (
        <>
            <Nav/>
            <img 
                src="https://placehold.co/1900x1080" 
                alt="placeholder"
                className="w-screen object-cover h-64 md:max-h-80"
            />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;