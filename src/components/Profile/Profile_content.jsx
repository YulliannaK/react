import React from "react";
import p from "./Profile_content.module.css";
import Posts from "./Postes/Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile_content = () => {
    return (
        <div>
            <div className={p.content}>
                <ProfileInfo/>
            </div>
            <Posts/>
        </div>
    )
}

export default Profile_content;