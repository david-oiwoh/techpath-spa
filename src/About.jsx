import { useContext } from 'react'
import { UserContext } from './UserContext';
function About() {
    const { name } = useContext(UserContext);
    return (
        <div className="container">
            <h1>About Us</h1>
            <h2>Welcome, {name}👋</h2>
            <p>TechPath is a beginner-friendly React project created to demonstrate routing, state management and reusable components.</p>
        </div>
    );
}
export default About;