import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, please reach out through the following methods:</p>
            <ul>
                <li>Email: example@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">linkedin.com/in/example</a></li>
            </ul>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;