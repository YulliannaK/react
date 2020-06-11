import React from "react";
import d from "./Messages.module.css"

const Messages = (props) => {
    return (
        <div className={d.dialogs}>
            <h3>Messages</h3>
            <div className={d.content}>
            <div className={d.users_names}>
                <div className={d.items + ' ' + d.active_user}>Yulia</div>
                <div className={d.items}>Olga</div>
                <div className={d.items}>Lena</div>
            </div>

            <div className={d.messages}>
                <div className={d.items}>Hi!</div>
                <div className={d.items}>hI! hI!</div>
                <div className={d.items}>hI! hi! Hi!</div>
            </div>
            </div>
        </div>
    )
}

export default Messages;