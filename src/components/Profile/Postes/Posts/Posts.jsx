import React from "react";
import post from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className='my_posts'>
            <div className={post.post}>
                <h3>My posts</h3>
                <input type='text'/>
                <button type='submit'>Add post</button>
            </div>
            <div className={post.new_posts}>
                <Post message="Hi, everyone" likes='5'/>
                <Post message='Good bay, to all' likes='20'/>
                <Post message="Good day to all my friends" likes="130" />

            </div>
        </div>
    )
}

export default Posts;