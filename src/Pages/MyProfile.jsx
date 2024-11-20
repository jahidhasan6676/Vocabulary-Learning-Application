import { useContext } from "react";

import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {

    const { user } = useContext(authContext)
   



    return ( 
        <div className="text-center py-14 space-y-2">
            <h2 className="font-semibold">Welcome, {user?.displayName}!</h2>
            <div className="flex justify-center">
                {
                    user && <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-[200px] rounded-[50%] "
                />
                }
            </div>
            <p><strong>Name:</strong> {user?.displayName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <Link to="/updateProfile" className="btn btn-primary">
                Update Profile
            </Link>
        </div>
    )
};

export default MyProfile;