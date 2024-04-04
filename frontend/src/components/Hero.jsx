import coverImage from '../assets/pexels-jonathan-borba-2878713.jpg';

const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-64 md:-translate-y-24 w-full text-center">
                <h1 className="text-white font-bold text-2xl md:text-4xl uppercase">
                    Experience one of a kind coffee
                </h1>
            </div>
            <img
                src={coverImage}
                className="w-screen h-dvh object-cover"
                alt="Coffee table setup with pour-over coffee"
            />
        </div>
    );
};

export default Hero;
