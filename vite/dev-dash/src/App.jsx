import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import DevTeam from './pages/DevTeam.jsx';

function App() {
  return(
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/devteam/:username" element={<DevTeam/>}/>
      </Routes>
    
    </Router>
  )

}

export default App
