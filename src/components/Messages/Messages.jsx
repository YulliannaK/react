import React from "react";
import d from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import UsersNames from "./UsersNames/UsersNames";
import UsersMessanges from "./UsersMessanges/UsersMessanges";

const Messages = (props) => {
    return (
        <div className={d.dialogs}>
            <h3>Messages</h3>
            <div className={d.content}>
                <div className={d.users_names}>
                    <UsersNames name="Yulia" id='1'/>
                    <UsersNames name="Olga" id='2'/>
                    <UsersNames name="Kolia" id='3'/>
                    <UsersNames name="Vasia" id='4'/>
                </div>

                <div className={d.messages}>
                    <UsersMessanges message="Hi!"/>
                    <UsersMessanges message="Hi!Hi!"/>
                    <UsersMessanges message="Hi!Hi!Hi!"/>
                    <UsersMessanges message="Hi!Hi!Hi!Hi!"/>
                </div>
            </div>
        </div>
    )
}

export default Messages;