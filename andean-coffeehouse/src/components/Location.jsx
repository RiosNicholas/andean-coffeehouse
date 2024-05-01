const Location = ({ city, state, address, phoneNumber }) => {
    return (
        <div className="rounded p-8 bg-yellow-50 flex text-black shadow-md border-yellow-100">
            <div>
                <h2 className="uppercase font-semibold italic text-lg">{city}, {state}</h2>
                <p className="ml-2">{address}</p>
                <p className="ml-2">{phoneNumber}</p>
            </div>
        </div>
    );
}

export default Location;