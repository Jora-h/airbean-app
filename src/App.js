import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Status from './views/Status';
import Menu from './views/Menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/status" element={ <Status/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
