import React from "react";
import s from "./Users.module.css";
import ava from "../../assets/images/avatar-png-1.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let countPages = Math.ceil(props.countUsers / props.pageSize);
    let pages = [];
    for(let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    return (
        <div className={ s.users }>
            <div className={ s.pagination }>
                { pages.map(p => {
                    return (<span key={p} onClick={ () =>  props.onPageSelect(p) } className={ props.currentPage === p ? s.active : s.pages }>
                            {p}
                        </span>)})
                }
            </div>
            { props.users.map(u => {
                return <div key={ u.id }>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.image ? u.image : ava} alt="ava"/>
                        </NavLink>
                        {u.followed ?
                            <button onClick={() => {
                                props.unFollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <div>{u.name}</div>
                        </NavLink>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        {u.location.country},
                        {u.location.city}
                    </div>
                </div>
            })
            }
        </div>
    );
}

export default Users;
