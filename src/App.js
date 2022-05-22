import './App.css';
import './bootstrap.css'
import {Route, Routes} from "react-router-dom"
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Nav from './components/Nav'
//import stocks from "./stocks"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks/:symbol" element={<Stock/>}/>
      <Route path="/stocks" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
