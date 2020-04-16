import React from "react";
import s from "./Post.module.css";

function Post(props) {

    return (
        <div className={s.item}>
            <img src={props.img} alt='avatar'/>
            { props.message }
            <div>likes: {props.likes}</div>
        </div>
    );
}

export default Post;
