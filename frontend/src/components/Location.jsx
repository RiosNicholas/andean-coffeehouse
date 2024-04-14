const Location = ({ city, state, address, phoneNumber, image, location }) => {
    return (
        <div className="rounded p-4 m-4 bg-yellow-50 md:w-3/4 w-1/3 flex text-black shadow-md border-yellow-100">
            <div>
                <h2 className="uppercase font-semibold italic">{city}, {state}</h2>
                <p className="ml-2">{address}</p>
                <p className="ml-2">{phoneNumber}</p>
                <p className="ml-2">{location}</p>
            </div>
            <img src={image}/>
        </div>
    );
}

export default Location;