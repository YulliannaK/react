import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile_content from "./components/Profile/Profile_content";
import Messages from "./components/Messages/Messages";
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
        <div className='wrapper'>
            <Header/>
            <Nav/>
            <div className='right-content'>
                <Route path='/profiile' component={Profile_content}/>
                <Route path='/messages' component={Messages}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
