import { Routes, Route } from 'react-router-dom'
import logo from './assets/logo.png.png'
import Home from './pages/Home'
import Room from './pages/Room'
import './App.css'
const App = () => {
  return(
    <div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
