import {addPostActionCreator, updateAreaActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        image: state.profilePage.image,
        textArea: state.profilePage.textArea
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost: addPostActionCreator, updateArea: updateAreaActionCreator})(MyPosts);

export default MyPostsContainer;
