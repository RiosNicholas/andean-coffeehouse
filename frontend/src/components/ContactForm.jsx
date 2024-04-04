import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/contact_form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                console.log('Email sent successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Failed to send email');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };


    return (
        <form className="w-full px-16 lg:px-32 py-24 bg-gray-100 shadow">
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