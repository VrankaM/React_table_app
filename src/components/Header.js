import Navbar from "./Navbar"
import MainHeading from "./MainHeading"
import "../css/Header.css"

const Header = () => {
    return(
        <header className="header">
            <MainHeading />
            <Navbar />
        </header>
    )
}

export default Header