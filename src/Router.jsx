import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import LandingPage from "./Cmponents/LandingPage/Page";
import SingleProduct from "./Cmponents/Product/SingleProduct";
import CartPage from "./Cmponents/CartPage/CartPage";
import PaymentPage from "./Cmponents/CartPage/PaymentPage";
import SuccessPage from "./Cmponents/CartPage/SuccessPage";
import AboutUs from "./Cmponents/AboutUs/page";
import Services from "./Cmponents/services/page";
import Blog from "./Cmponents/Blog/Blog";
import ContactUs from "./Cmponents/Contact/page";
import NotFound from "./Cmponents/NotFound/page";
import Login from "./Cmponents/USER/Login";
import SignUp from "./Cmponents/USER/SignUp";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <LandingPage />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "product/:id",
                element: <SingleProduct />
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {

                path: "/payment",
                element: <PaymentPage />
            },
            {
                path: "/success",
                element: <SuccessPage />
            },
            {
                path: "*",
                element: <NotFound />
            }

        ]

    }
])

export default router;