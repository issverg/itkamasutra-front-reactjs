import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
    let posts = props.posts;
    let image = props.image;
    let postElems = posts.map(post => <Post img={image} id={post.id} message={post.message} likes={post.likes}/>);
    let textRef = React.createRef();

    let addPost = () => {
        props.addPost(textRef.current.value);
    };

    let updateArea = () => {
        props.updateArea(textRef.current.value);
    };

    return(
        <div>
            <div>
                <textarea ref={textRef} value={props.textArea} onChange={updateArea}/>
            </div>
            <div>
                <button onClick={addPost}>Post it!</button>
            </div>
            <div>{ postElems }</div>
        </div>
    );
}

export default MyPosts;
