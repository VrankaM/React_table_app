import { Menu } from "antd"
import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"
import "../css/Navbar.css"

const Navbar = () => {
    const navLinks = [
        {
            label: <NavLink className="navlink" to="/">Home</NavLink>,
            key: 'home',
        },{
            label: <NavLink className="navlink" to="/data">Data</NavLink>,
            key: 'data',
        },{
            label: <NavLink className="navlink" to="/contact">Contact</NavLink>,
            key: 'contact',
        }
    ]

    // setting default active navlink from url path
    let path = useLocation().pathname
    const [active, setActive] = useState( () => {
            path = path.substring(1)
            return path === "" ? "home" : path
        }
    )

    const onClick = (e) => {
        setActive(e.key)
    }

    return(
        <Menu className="menu" onClick={onClick} selectedKeys={ active } mode="horizontal" items={navLinks} theme="dark"/>
    )
}

export default Navbar