import React from 'react'
import "./App.css"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import {Dashboard,Login,Signup,Create,Project }from "./Pages/index"
import Navbar from './Components/NavBar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { useAuthContext } from './Hooks/useAuthContext'
import { Redirect } from 'react-router-dom'

function App() {

  const { user, authIsReady } = useAuthContext();
  return (
    <div className='App '>
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />

            <Switch>
              <Route path='/' exact>
                {user && <Dashboard />}
                {!user && <Login />}
              </Route>
              <Route path='/login'>
                {!user && <Login />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/signup'>
                {!user && <Signup />}
                {user && <Redirect to='/' />}
              </Route>
              <Route path='/projects/:id'>
                {user && <Project />}
                {!user && <Redirect to='login' />}
              </Route>
              <Route path='/create'>
                {user && <Create />}
                {!user && <Redirect to='login' />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );

}

export default App 