import './App.css';
import Click from './component/Event Handling/Click';
import ClickTwo from './component/Event Handling/ClickTwo';
import Clickcounter from './component/HOC/Clickcounter';
import HoverCounter from './component/HOC/HoverCounter';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Mounting from './component/LifecycleMethods/Mounting';
import Unmouting from './component/LifecycleMethods/Unmouting';
import Updating from './component/LifecycleMethods/Updating';
import PureComp from './component/Pure component/PureComp';
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

        {/* <Updating /> */}

        {/* <Unmouting /> */}

        {/* <Click /> */}

        {/* <ClickTwo /> */}

        <Clickcounter />

        <HoverCounter />

      </div>
    </>
  );
}

export default App;
