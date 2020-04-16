import {addMessageActionCreator, updateMsgActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (body) => {
            dispatch(addMessageActionCreator(body));
        },
        updateMsg: (body) => {
            dispatch(updateMsgActionCreator(body));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
