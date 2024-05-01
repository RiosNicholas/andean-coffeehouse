import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CustomerLeaderboard from "../components/CustomerLeaderboard";
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
            <main className="flex justify-center items-center px-4 md:px-8 lg:px-10 xl:px-20 py-2">
                <CustomerLeaderboard />
            </main>
            <Footer/>
        </>
    );
}

export default Leaderboard;