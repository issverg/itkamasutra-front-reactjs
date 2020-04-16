import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

function Dialogs(props) {
    let contElems = props.dialogsPage.contacts.map(con => <Dialog name={con.name} id={con.id}/>);
    let discElems = props.dialogsPage.discuss.map(dis => <Message message={dis.content} id={dis.id}/>);
    let msg = React.createRef();
    let msgArea = props.dialogsPage.msgArea;

    let addMessage = () => {
        props.addMessage(msg.current.value);
    };

    let updateMsg = () => {
        props.updateMsg(msg.current.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                { contElems }
            </div>
            <div className={s.message}>
                <div>{ discElems }</div>
                <div>
                    <textarea ref={msg} value={msgArea} onChange={updateMsg}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Post it!</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
