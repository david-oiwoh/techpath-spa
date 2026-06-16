import { useContext } from 'react'
import { UserContext } from './UserContext';
function Contact() {
    const { name } = useContext(UserContext);
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <h2>Welcome, {name}👋</h2>
            <p>Email: info@techpath.com</p>
            <p>Phone: (123) 456-7890</p>
            <button>Send Message</button>
        </div>
    );
}
export default Contact;