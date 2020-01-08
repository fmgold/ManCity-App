import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { firebase } from './firebase'
 
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = (props) => {
    return(
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})




