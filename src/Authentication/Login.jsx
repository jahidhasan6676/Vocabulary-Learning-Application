import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {userLogin,setUser,googlePopup} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
 

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password") 

        userLogin(email,password)
        .then(result =>{
            setUser(result.user)
           
            // console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        .catch(error =>{
            // console.log(error.code)
            console.log(error)
        })

       
        
    }

     // google Popup
    const handleGooglePopup = () =>{
        googlePopup()
        .then(result => {
            setUser(result);
            navigate("/")
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="card  w-full max-w-sm mx-auto shrink-0 glass mt-20 mb-20">
            <form onSubmit={handleLogin} className="card-body">
                <h3 className='text-xl font-bold text-center mb-4'>Login Your Account</h3>
                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    {/* {
                        error && <p className='text-sm text-red-500'>{error}</p>
                    } */}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button  className="btn btn-primary">Login</button>
                    
                    <div className="divider font-semibold">or</div>
                    <button onClick={handleGooglePopup} className=" btn btn-success text-white"><FaGoogle />Continue With Google</button>
                </div>
            </form>
            <p className='text-xs ml-8 mb-2'>Don’t Have An Account ? <Link to="/register" className='text-red-500 underline'>Register</Link></p>
            
        </div>
    );
};

export default Login;