import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
    return (
        <div>
            
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
           
        </div>
    );
};

export default MainLayout;