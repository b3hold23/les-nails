import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const currentPage = useLocation().pathname;

    return (
        <nav>
            <h1>
                <Link to= '/' id='logo'>
                Say Les Nails
                </Link>
            </h1>
            <ul>
                <li>
                  <h2>
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    HOME
                    </Link>
                  </h2>
                </li>
                <li>
                 <h2>
                    <Link to='/Gallery' className={currentPage === '/Gallery' ? 'nav-link active' : 'nav-link'}>
                    GALLERY
                    </Link>
                 </h2>
                </li>
                <li>
                    <h2>
                        <Link to='/BookPage' className={currentPage === '/BookPage' ? "nav-link active" : 'nav-link'}>
                        BOOK NOW
                        </Link>
                    </h2>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;