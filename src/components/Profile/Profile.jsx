 import React from "react";
 import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {

    return (
        <div>
            <div>
                <img alt='sdsas' src='http://www.esgturkey.com/wp-content/uploads/2017/09/header-visual-sub-water-1.jpg'
                     width='900px'/>
            </div>
            <div>
                <img alt='sdsas'
                     src='https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/avatar/show-cover-avatar.jpg?quality=0.75&height=0&width=120&matte=true&crop=false' />
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
