import './NavBar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';
// import { Link } from "react-router-dom";

function NavBar(){
    return (
        <>
        <nav>
            <ul>
                <li><img src="" alt="akjsda" /></li>
                <li><Link className="navLink" to="/">Projects</Link></li>
                <li><Link className="navLink" to="/">Resume</Link></li>
                <li><Link className="navLink" to="/">Education</Link></li>
                <li><Link className="navLink" to="/about">About me</Link></li>
                <li><Link className="navLink" to="/contact">Contact</Link></li>
                {/* <li><img src="" alt="Admin logo" className='adminLogo' /></li> */}
                <li><img src="" alt="Admin logo" className='adminLogo'  /></li>
            </ul>
        </nav>
        </>




    )
}

export default NavBar;