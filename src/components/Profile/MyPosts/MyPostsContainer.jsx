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

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (body) => {
            dispatch(addPostActionCreator(body));
        },
        updateArea: (body) => {
            dispatch(updateAreaActionCreator(body));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
