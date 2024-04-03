const ContactForm = () => {
    return (
        <form className="w-full my-8 p-16 bg-yellow-50">
            <div className="flex">
                <div className="m-2">
                    <label 
                        htmlFor="name" 
                        className="block text-black text-lg font-medium mb-1">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-700 text-black bg-white leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your name" 
                    />
                </div>
                <div className="m-2">
                    <label 
                        htmlFor="email" 
                        className="block text-black text-lg font-medium mb-1">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-700 bg-white text-black leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="Enter your email" 
                    />
                </div>
            </div>
            <div className="m-2">
                <label 
                    htmlFor="message" 
                    className="block text-black text-lg font-medium mb-2">
                    Message
                </label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white border-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Enter your message">
                </textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
                <button 
                    type="submit" 
                    className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                    Send
                </button>
            </div>
        </form>
    );
}

export default ContactForm;