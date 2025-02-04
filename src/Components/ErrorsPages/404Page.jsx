
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;

