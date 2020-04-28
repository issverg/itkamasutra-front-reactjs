import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

let ProfileInfo = (props) => {
    if (!props.profile) return <Preloader />;

    return(
        <div>
            <div>
                <img src={props.wallpaper}
                     width='700px' alt='walppr' />
            </div>
            <div className={s.profile}>
                <img alt='ava'
                     src={props.profile.image} />
            </div>
        </div>
    );
}

export default ProfileInfo;
