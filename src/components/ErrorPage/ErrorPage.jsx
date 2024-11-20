import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        // <div className="text-xl text-center my-20">
        //     <h2>Error</h2>
        //     <h3>Page not found</h3>
        //     <Link to="/" className="btn">Back to Home</Link>
        // </div>
        

        <div style={{ height: "100vh",
            background: "-webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc)"}} >
            <div className=" rounded-md  bg-white w-[40%] mx-auto space-y-2 text-center p-6">
               
                <h2 className="font-semibold text-7xl">
                    404
                </h2>
                <h4 className="font-semibold text-xl">
                    Opps! Page not found
                </h4>
                <p className="text-sm font-medium text-gray-500">
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                </p>
                <div>
                   <Link to="/" className="btn btn-warning text-white"> return home</Link>
                    
                </div>
                </div>
           
        </div>
    );
};

export default ErrorPage;