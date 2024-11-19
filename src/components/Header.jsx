import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from '../assets/images.png';
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Header = () => {
    const { user, userLogOut } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        userLogOut();
        navigate("/login")
    }
    return (
        <div className="navbar  w-11/12 mx-auto">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  shadow w-[100px]">
                        <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

                        <NavLink to="/learning" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Start-Learning</NavLink>

                        <NavLink to="/tutorials" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Tutorials</NavLink>

                        <NavLink to="/about" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>About Us</NavLink>

                        <NavLink to="profile" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>My Profile</NavLink>

                    </ul>
                </div>
                <img className="w-[170px] hidden md:flex" src={logoImg} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8">
                    <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

                    <NavLink to="/learning" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Start-Learning</NavLink>

                    <NavLink to="/tutorials" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Tutorials</NavLink>

                    <NavLink to="/about" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>About Us</NavLink>

                    {
                        user?.email && <NavLink to="/profile" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>My Profile</NavLink>
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">

                {
                    user &&
                        <div className="">
                            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                            
                        </div>
                        
                }


                {
                    user ? <button onClick={handleLogout} className="btn btn-neutral">LogOut</button> : <Link to="/login" className="btn btn-neutral">Login</Link>
                }

            </div>


        </div>
    );
};

export default Header;