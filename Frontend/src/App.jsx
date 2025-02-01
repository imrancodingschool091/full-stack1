import React from 'react'
import CreateUser from './components/CreateUser'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import UsersList from './components/UsersList'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<CreateUser/>}/>
    <Route path='/view' element={<UsersList/>}/>




   </Routes>
   </>
  )
}

export default App