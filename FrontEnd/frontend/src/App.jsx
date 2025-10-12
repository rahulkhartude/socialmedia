import { useState } from 'react'
import './App.css'
import "./index.css";  //
import {Topbar} from './components/topbar.jsx';
import {Navbar} from './components/navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <div className="mt-5">
      <Navbar/>
      </div>
    </>
  )
}

export default App
