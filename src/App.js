import './App.css';
// import Click from './component/Event Handling/Click';
// import ClickTwo from './component/Event Handling/ClickTwo';
// import Clickcounter from './component/HOC/Clickcounter';
// import HoverCounter from './component/HOC/HoverCounter';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Website Demo/Home';
// import Mounting from './component/LifecycleMethods/Mounting';
// import Unmouting from './component/LifecycleMethods/Unmouting';
// import Updating from './component/LifecycleMethods/Updating';
// import PureComp from './component/Pure component/PureComp';
// import Container from './component/Rendering/Container';
// import RenderClickCounter from './component/Rendering/RenderClickCounter';
// import RenderHoverCounter from './component/Rendering/RenderHoverCounter';
// import User from './component/Rendering/User';
// import ComA from './component/Context/ComA';
// import UserContext, { UserProvider } from './component/Context/UserContext';
// import RefDemo from './component/Ref/RefDemo';
// import FocusInput from './component/Ref/FocusInput';
// import FRparentInput from './component/forwardingRef/FRparentInput';
// import ParentCom from './component/Pure component/ParentCom';
// import Composition from './component/Composition/Composition';
// import Prop from './component/PropTypes/Prop';
// import Form from './component/ControlledComponent/Form';
// import TextArea from './component/ControlledComponent/TextArea';
// import MultipleInput from './component/ControlledComponent/MultipleInput';
// import FormControl from './component/ControlledComponent/FormControl';
// import StrictModeEx from './component/StrictMode/StrictModeEx';
import React from 'react';
// import About from './component/About';
import { Provider } from 'react-redux'
import store from './Website Demo/redux/store';
// import NewsContainer from './Website Demo/redux/NewsContainer';
import FirstProduct from './component/FirstProduct';
import HookFirstProduct from './component/redux/HookFirstProduct';
import SecondProduct from './component/SecondProduct';
import NewFirstProduct from './component/redux/NewFirstProduct';
import ItemContainer from './component/redux/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
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

        {/* <ParentCom /> */}

        {/* <Composition>
           <h2>Hello</h2>
        </Composition> */}

        {/* <Prop name='User Name' id = {10} /> */}

        {/* <Form /> */}

        {/* <TextArea /> */}

        {/* <MultipleInput /> */}

        {/* <FormControl /> */}

        {/* <React.StrictMode>
          <StrictModeEx />
        </React.StrictMode> */}

    
        {/* <NewsContainer /> */}

        {/* <FirstProduct /> */}

        {/* <HookFirstProduct /> */}
        
        <NewFirstProduct />

        <SecondProduct />

        <ItemContainer firstProduct />
        <ItemContainer />

      </div>
    </Provider>
  );
}

export default App;
