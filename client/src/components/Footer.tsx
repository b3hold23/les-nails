import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <div>
                <h1>
                 Leave a review <button onClick={() => navigate('/reviewPage')} className='btn btn-link'>Here</button>
                </h1>
                <p>
                    Created by Angel Fernandez &copy; {new Date().getFullYear()} <Link to='https://github.com/b3hold23'>GitHub</Link>
                </p>
            </div>        
        </footer>
    )
};

export default Footer;