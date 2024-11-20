import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {
    const {resetPassword} = useContext(authContext);
    const navigate = useNavigate();

    const handleResetPassword = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email")

        resetPassword(email)
        .then(() =>{
            // window.location.href = "https://mail.google.com";
        })
        .catch(error =>{
            console.log(error)
        })
    }


    return (
        <div className="py-20">
            <div className="glass p-6 rounded-xl w-[30%] mx-auto">
                <h2 className="font-semibold text-center">Forget Password</h2>
                <form onSubmit={handleResetPassword}>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        {/* <div className="flex justify-between mt-3 "> */}
                        <button className="btn btn-info w-fit mt-3">Reset Password</button>
                        {/* <Link to="/login"><button className="btn btn-accent">Back</button></Link> */}
                        {/* </div> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;