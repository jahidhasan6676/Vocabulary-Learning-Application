import { NavLink } from "react-router-dom";
import logoImg from '../assets/images.png';


const Header = () => {
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  shadow">
                        <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

                        <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Start-Learning</NavLink>

                        <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Tutorials</NavLink>

                        <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>About Us</NavLink>

                        <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>My Profile</NavLink>

                    </ul>
                </div>
               <img className="w-[170px]" src={logoImg} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8">
                    <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

                    <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Start-Learning</NavLink>

                    <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Tutorials</NavLink>

                    <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>About Us</NavLink>

                    <NavLink to="" className={({ isActive }) => `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>My Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-neutral">LogOut</button>
            </div>


        </div>
    );
};

export default Header;