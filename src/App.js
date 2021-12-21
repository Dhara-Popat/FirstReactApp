import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Mounting from './component/LifecycleMethods/Mounting';
import Updating from './component/LifecycleMethods/Updating';
// import About from './component/About';

function App() {
  return (
    <>
      <div className='App'>
        {/* <Router>
            <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
           </div>
          </Router> */}

        {/* <Home /> */}

        {/* <Mounting favColor = "Yellow" /> */}

        <Updating />

      </div>
    </>
  );
}

export default App;
