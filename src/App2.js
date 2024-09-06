import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/Login'
import Profile from './components/Profile';
import { LoginContext } from './context/logincontext';


function App2() {
    const [profile, setprofile] = useState(false)
    const [password, serpassword] = useState("")
    const [username, setusername] = useState("")


    return (
        <div className='App2'><LoginContext.Provider value={{ username, setusername,setprofile }}>
            {profile ? <Profile /> : <Login />}
        </LoginContext.Provider>

        </div>
    )
}
export default App2

