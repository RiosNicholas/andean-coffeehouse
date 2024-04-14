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
            <h1 className="mx-10 my-4 text-3xl font-extrabold uppercase">Our Story</h1>
            <main className="mx-10 my-2 bg-slate-50 text-black rounded p-5">
                Welcome to Andean Coffeehouse! One morning, a condor flew to my window holding a bag of coffee beans, inspiring me to roast them and open this coffeeshop. It's a tale as wild as a condor's flight, and as rich as the brew we serve.
            </main>
            <Footer />
        </>
    );
}

export default About;