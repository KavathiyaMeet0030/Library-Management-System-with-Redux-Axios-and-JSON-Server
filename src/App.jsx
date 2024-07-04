import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './Components/Home/Home'
import AddData from './Components/AddData/AddData'
import Edit from './Components/Edit/Edit'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
 
   <Header />

      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="/AddData" element={ <AddData />}/>
           <Route path="/Edit/:id" element={<Edit/>}/>
        </Routes>
    </>
  )
}

export default App
