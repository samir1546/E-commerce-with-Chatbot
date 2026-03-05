import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Cmponents/Navbar/page'
import Footer from './Cmponents/Footer/page'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout