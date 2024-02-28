import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/dashboard'
import { Send } from './pages/sen'
import { Test } from './pages/exp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <Routes>
        <Route path = '' element = {<Test/>}/>
        <Route path = '/signup' element = {<Signup/>}/>
        <Route path = '/signin' element = {<Signin/>} />
        <Route path = '/dashboard' element = {<Dashboard/>} />
        <Route path = '/send' element = {<Send/>}/>
      </Routes>
    </>
  )
}

export default App
