
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';

import Home from './Components/Home';
import NavbarComp from './Components/NavbarComp';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import AboutsPage from './AboutsPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavbarComp  title="Props use" />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={AboutsPage}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/login' Component={LoginPage}/>
      </Routes>

          {/* <NavbarComp></NavbarComp> */}
          {/* <About title="Self Introduction "/> */}
              {/* <Contact/> */}
        {/* <LoginForm text="jay ranchod"/> */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
