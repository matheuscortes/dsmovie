import './style.css'; 
import { ReactComponent as GitHubIcon } from 'assets/github.svg'; 
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1 onClick={() => navigate("/")}>DSMovie</h1>
                    <a href="https://github.com/matheuscortes">
                        <div className='dsmovie-contact-container'>
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/matheuscortes</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    ); 
}

export default Navbar; 