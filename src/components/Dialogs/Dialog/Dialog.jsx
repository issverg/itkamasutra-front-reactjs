import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
    let path = '/dialogs/' + props.id;

    return(
        <div>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;
