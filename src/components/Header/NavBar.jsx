import './NavBar.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import PersonIcon from '@mui/icons-material/Person';

function NavBar(){
    return (
        <>
        <Router>
        <nav>
            <ul>
                <li><img src="" alt="akjsda" /></li>
                <li><Link className="navLink" to="/">Ajsdfj</Link></li>
                <li><Link className="navLink" to="/">Bjsdfj</Link></li>
                <li><Link className="navLink" to="/">Cjsdfj</Link></li>
                <li><Link className="navLink" to="/">Djsdfj</Link></li>
                <li><Link className="navLink" to="/">Ejsdfj</Link></li>
                <li><img src="" alt="Admin logo" className='adminLogo' /></li>
                <li><img src="" alt="Admin logo" className='adminLogo'  /></li>
            </ul>
        </nav>


        </Router>

        </>




    )
}

export default NavBar;