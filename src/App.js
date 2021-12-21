import './App.css';
import Click from './component/Event Handling/Click';
import ClickTwo from './component/Event Handling/ClickTwo';
import Clickcounter from './component/HOC/Clickcounter';
import HoverCounter from './component/HOC/HoverCounter';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Website Demo/Home';
import Mounting from './component/LifecycleMethods/Mounting';
import Unmouting from './component/LifecycleMethods/Unmouting';
import Updating from './component/LifecycleMethods/Updating';
import PureComp from './component/Pure component/PureComp';
import Container from './component/Rendering/Container';
import RenderClickCounter from './component/Rendering/RenderClickCounter';
import RenderHoverCounter from './component/Rendering/RenderHoverCounter';
import User from './component/Rendering/User';
import ComA from './component/Context/ComA';
import UserContext, { UserProvider } from './component/Context/UserContext';
import RefDemo from './component/Ref/RefDemo';
import FocusInput from './component/Ref/FocusInput';
import FRparentInput from './component/forwardingRef/FRparentInput';
import ParentCom from './component/Pure component/ParentCom';
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

        {/* <Clickcounter text = 'Click : ' /> */}

        {/* <HoverCounter /> */}

        {/* <Container render={(count, incrementCount) =>
          <RenderClickCounter
            count={count}
            incrementCount={incrementCount}
          />
        } /> */}

        {/* <Container render={(count, incrementCount) =>
          <RenderHoverCounter
            count={count}
            incrementCount={incrementCount}
          />
        } /> */}

        {/* <User render={(isLoggedIn) => isLoggedIn ? 'UserName' : 'Guest'} /> */}

        {/* <UserProvider value="UserName">
          <ComA />
        </UserProvider> */}

        {/* <RefDemo /> */}

        {/* <FocusInput /> */}

        {/* <FRparentInput /> */}

        <ParentCom />

      </div>
    </>
  );
}

export default App;
