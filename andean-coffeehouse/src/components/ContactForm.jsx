import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost/api/index.php', formData);
            console.log("Form data submitted successfully:", response.data);
            alert('Form data submitted successfully');

            // Resetting form data after successful submission
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error submitting form data:", error);
            setError("Failed to submit form data");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full px-16 lg:px-32 py-8 bg-gray-100 shadow">
            <h1 className="mb-4 text-3xl font-extrabold uppercase text-black">Contact Us</h1>
            {error && <div className="text-red-600">{error}</div>}
            <div className="flex w-full">
                <div className="m-2 w-1/2">
                    <label 
                        htmlFor="name" 
                        className="block text-black text-lg font-medium mb-1">
                        Name
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-600 text-black bg-white leading-tight focus:outline-none focus:shadow-outline focus:border-2" 
                        placeholder="Enter your name" 
                    />
                </div>
                <div className="m-2 w-1/2">
                    <label 
                        htmlFor="email" 
                        className="block text-black text-lg font-medium mb-1">
                        Email
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-600 text-black bg-white leading-tight focus:outline-none focus:shadow-outline focus:border-2" 
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
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white border-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Enter your message">
                </textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
                <button 
                    onSubmit={handleSubmit}
                    type="submit" 
                    className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
                    Send
                </button>
            </div>
        </form>
    );
}

export default ContactForm;