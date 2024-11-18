import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorials from "../Pages/Tutorials";
import About from "../Pages/About";
import MyProfile from "../Pages/MyProfile";
import LessonAllCard from "../components/LessonAllCard";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/learning",
                element:<StartLearning></StartLearning>
               
            },
            {
                path:"/tutorials",
                element:<Tutorials></Tutorials>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/profile",
                element:<MyProfile></MyProfile>
            },
            {
                path:"/lessonCard",
                element:<LessonAllCard></LessonAllCard>
            }
        ],

        
    },
    
])

export default router;