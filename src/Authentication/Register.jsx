import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const {userRegister,setUser,googlePopup} = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log(name,photo,email,password)


        // register user
        userRegister(email,password)
        .then(result => {
            setUser(result.user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/")
            })
        })
        .catch(error =>{
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
        <div className="py-20">
            <div className="card  w-full max-w-sm mx-auto glass">
                <form onSubmit={handleSubmit}  className="card-body">
                <h3 className='text-xl font-bold text-center mb-4'>Register Your Account</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        {/* {
                            error.name && <p className='text-sm text-red-500'>{error.name}</p>
                        } */}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                    </div>


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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <div className="divider font-semibold">or</div>
                        <button onClick={handleGooglePopup} className=" btn btn-success text-white"><FaGoogle />Continue With Google</button>
                    </div>
                </form>
                <p className='text-xs ml-8 mb-2'>Already have an account ? <Link to="/login" className='text-red-500 underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;