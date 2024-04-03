import coverImage from '../assets/pexels-jonathan-borba-2878713.jpg'


const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                <h1 className="text-white font-bold text-2xl md:text-4xl uppercase shadow">
                    Experience one of a kind coffee
                </h1>
            </div>
            <img 
                src={coverImage}
                className="w-screen object-cover h-dvh max- shadow"
            />
        </div>
    );
}

export default Hero;
