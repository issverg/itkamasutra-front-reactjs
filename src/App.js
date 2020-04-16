import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Route} from "react-router-dom";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Settings from "./components/Settings/Settings.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-content-wrapper'>
                <Route path='/profile' render={ () => <Profile /> } />
                <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                <Route path='/users' render={ () => <UsersContainer /> } />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
