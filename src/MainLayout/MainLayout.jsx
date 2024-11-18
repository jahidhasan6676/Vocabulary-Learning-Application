import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto min-h-[calc(100vh-372px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default MainLayout;