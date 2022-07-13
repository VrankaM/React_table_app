import { Outlet } from "react-router-dom"
import Header from "./Header.js"
import Footer from "./Footer.js"

const SharedLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout