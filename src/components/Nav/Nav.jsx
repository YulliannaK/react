import React from "react";
import n from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={n.app_nav}>
            <NavLink to="/profiile" activeClassName={n.active_link}>Profile</NavLink>
            <NavLink to="/messages" activeClassName={n.active_link}>Messages</NavLink>
            <NavLink to="/news" activeClassName={n.active_link}>News</NavLink>
            <NavLink to="/music" activeClassName={n.active_link}>Music</NavLink>
            <NavLink to="/settings" activeClassName={n.active_link}>Settings</NavLink>
        </nav>
    )
}

export default Nav;