import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrPageActionCreator,
    setFetchingActionCreator,
    setTotalUsersActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFlag(true);
        let config = {
            headers: {
                'API-KEY': '77b62ee9-39c9-4aca-a580-9ec6f7239b83'
            }
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/page=${this.props.currentPage}&count=${this.props.pageSize}`, config).then(res => {
            this.props.toggleFlag(false);
            debugger;
            this.props.setTotalUsers(res.data);
            this.props.setUsers(res.data);
        });
    }

    onPageSelect = (page) => {
        this.props.toggleFlag(true);
        this.props.setCurrPage(page);
        axios.get(`http://localhost:8080/users/${page}/${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data);
            this.props.toggleFlag(false);
        });
    }

    render() {
        return <>
                { this.props.isFetching ? <Preloader /> : null}
                <Users countUsers={this.props.countUsers}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageSelect={this.onPageSelect}
                          users={this.props.users}
                          follow={this.props.follow}
                          unfollow={this.props.unFollow}/>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        countUsers: state.usersPage.countUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrPage: (page) => {
//             dispatch(setCurrPageActionCreator(page));
//         },
//         setTotalUsers: (users) => {
//             dispatch(setTotalUsersActionCreator(users));
//         },
//         toggleFlag: (flag) => {
//             dispatch(setFetchingActionCreator(flag));
//         }
//     }
// };

//export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // or we can make it shorter

export default connect(mapStateToProps, {
                            follow: followActionCreator,
                            unFollow: unFollowActionCreator,
                            setUsers: setUsersActionCreator,
                            setCurrPage: setCurrPageActionCreator,
                            setTotalUsers: setTotalUsersActionCreator,
                            toggleFlag: setFetchingActionCreator
                        })(UsersContainer);
