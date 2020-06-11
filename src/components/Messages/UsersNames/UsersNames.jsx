import React from "react";
import u from "./UsersNames.module.css"
import {NavLink} from "react-router-dom";

const UsersNames = (props) => {
    return (
            <div className={u.items + ' ' + u.active_user}>
                <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
            </div>
    )
}

export default UsersNames;