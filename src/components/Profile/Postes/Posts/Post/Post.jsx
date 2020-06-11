import React from "react";
import post from "./Post.module.css";

const Post = (props) => {
    return (

        <div className={post.new_post}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_uiHG8SFpyUwbKa2b8CNk_NPjJl_uUA8CHPhY45-E9hBCwIWR&usqp=CAU'/>
            <div className={post.new_posts_text}>
                {props.message}
                <span>  {props.likes} likes</span>

            </div>
        </div>
    )
}

export default Post;