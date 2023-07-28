import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>SpeakAi</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;