import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-xl text-center my-20">
            <h2>Error</h2>
            <h3>Page not found</h3>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;