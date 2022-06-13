import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className='App' >
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route  path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
