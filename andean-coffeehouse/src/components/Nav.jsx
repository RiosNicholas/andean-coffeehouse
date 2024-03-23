const Nav = () => {
    return (
        <div className="flex w-screen p-5 bg-yellow-50 text-black">
            <nav className="flex justify-between">
                <label className="font-extrabold mx-5">Andean Coffeehouse</label>
                <ul className="list-none flex font-light mx-5">
                    <li className="">Home</li>
                    <li>Our Story</li>
                    <li>Menu</li>
                    <li>Blog</li>
                    <li>Locations</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;