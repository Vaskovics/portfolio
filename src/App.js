import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Homescreen';
import Navbar from './pages/Home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<div>404 Not Fount</div>}></Route>
          </Routes>
        </div>
      </Router>


    </div>
  );
}

export default App;
