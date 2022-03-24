import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Navigation from './views/Navigation';
import About from './views/About';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
    <Route path="/Home" element={ <Home /> } />
    <Route path="/Navigation" element={ <Navigation /> } />
    <Route path="/About" element={ <About /> } />
    <Route path="/Menu" element={ <Menu /> } />
    <Route path="/Cart" element={ <Cart /> } />
    <Route path="/Status" element={ <Status/> } />

  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
