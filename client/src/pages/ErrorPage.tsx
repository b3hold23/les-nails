import { Link } from 'react-router-dom';

const ReturnButton = () => {
    return (
        <Link to="/">
            <button>Return to Home</button>
        </Link>
    );
}

const ErrorPage = () => {
    return (
        <div>
            <h1>404: Page Not Found</h1>
            <ReturnButton />
        </div>
    );
}

export default ErrorPage;