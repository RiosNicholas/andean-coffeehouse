const MenuItem = ({ product_name, flavor_description, unit_price, origin, drink_type, bean_type, roast }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 hover:bg-gray-200 transition">
            <div className="px-6 py-4">
                <h3 className="font-bold text-base text-black">{product_name}</h3>
                <p className="text-gray-700 text-sm font-medium italic mb-2">{flavor_description}</p>
                <div className="ml-1">
                    <p className="text-gray-700 text-sm font-light">Price: ${unit_price}</p>
                    <p className="text-gray-700 text-sm font-light">Origin: {origin}</p>
                    <p className="text-gray-700 text-sm font-light">Drink Type: {drink_type}</p>
                    <p className="text-gray-700 text-sm font-light">Bean Type: {bean_type}</p>
                    <p className="text-gray-700 text-sm font-light">Roast: {roast}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
