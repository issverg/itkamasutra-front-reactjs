import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //this.props.toggleFlag(true);
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
           console.log(res.data);
           this.props.setProfile(res.data);
        });
    }

    render() {
        return (
            <>
                <Profile {...this.props} profile={this.props.profile} />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    };
}

export default connect(mapStateToProps, { setProfile: setProfileActionCreator })(withRouter(ProfileContainer));
