import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
// import About from './component/About';

function App() {
  return (
    // <Router>
      <div>
        {/* <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about'  element={<About />} />
        </Routes> */}
        <Home />
      </div>
    // </Router>
  );
}

export default App;
