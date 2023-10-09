import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Course from "../Pages/Course/Course";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Social from "../Header/social/Social";
import CardsDetails from "../Pages/CardsDetails/CardsDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/web.json')
            },
            {
                path: '/card/:id',
                element: <PrivateRoute>
                            <CardsDetails></CardsDetails>
                        </PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/social',
                element: <Social></Social>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
    

export default routers;