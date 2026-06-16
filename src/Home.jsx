import { useContext } from 'react'
import { UserContext } from './UserContext';
function Home() {
    const { name, setName } = useContext (UserContext);
    return (
        <div className="container">
            <h1>Welcome, {name}👋</h1>
            <p>Learn React by buidling a single-page application.
                This project demonstrates how to use React Router, React Context, and reusable components.
            </p>
            <input
                type="text"
                value={name}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/><br/>
            <button>Get Started</button>
        </div>
    );
}
export default Home;