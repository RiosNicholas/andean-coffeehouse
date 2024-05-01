import Footer from "../components/Footer";
import Nav from "../components/Nav";
import coverImage from "../assets/pexels-afta-putta-gunawan-683039.jpg"

const Leaderboard = () => {
    return (
        <>
            <Nav/>
            <img 
                src={coverImage}
                className="w-screen object-cover h-64 md:max-h-80 shadow"
                aria-placeholder="A coffee shop"
            />
            <h1 className="mx-10 my-4 text-3xl font-extrabold uppercase">Customer Leaderboard</h1>
            <Footer/>
        </>
    );
}

export default Leaderboard;