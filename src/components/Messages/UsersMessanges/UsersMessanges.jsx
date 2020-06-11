import React from "react";
import um from "./UsersMessanges.module.css"

const UsersMessanges = (props) => {
    return (
        <div className={um.items}>{props.message}</div>
    )
}

export default UsersMessanges;