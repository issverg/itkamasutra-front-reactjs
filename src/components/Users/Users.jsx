import React from "react";
import s from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:8080/users/1/7").then(res => {
                this.props.setUsers(res.data);
            });
    }

    render() {
        return (
            <div className={ s.users }>
                { this.props.users.map(user => <div key={ user.id }>
                  <div>
                      <img src={ user.image } alt="ava"/>
                      { user.followed ?
                          <button onClick={ () => { this.props.unFollow(user.id) } }>UnFollow</button> :
                          <button onClick={ () => { this.props.follow(user.id) } }>Follow</button> }
                  </div>
                  <div>
                      <div>{ user.name }</div>
                      <div>{ user.status }</div>
                  </div>
                  <div>
                      { user.location.country },
                      { user.location.city }
                  </div>
              </div>)
            }
        </div>
        );
    }
}

// let Users = (props) => {
//
//     if (props.users.length === 0) {
//         axios.get("http://localhost:8080/users")
//             .then(res => {
//                 props.setUsers(res.data);
//             });
//     }
//
//     return (
//         <div className={s.users}>
//             {
//               props.users.map(user => <div key={user.id}>
//                   <div>
//                       <img src={user.image} alt="ava"/>
//                       { user.followed ?
//                           <button onClick={ () => { props.unFollow(user.id) } }>UnFollow</button> :
//                           <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
//                   </div>
//                   <div>
//                       <div>{user.name}</div>
//                       <div>{user.status}</div>
//                   </div>
//                   <div>
//                       {user.location.country},
//                       {user.location.city}
//                   </div>
//               </div>)
//             }
//         </div>
//     );
// };

export default Users;
