import './App.css';
import LogIn from './pages/logIn/LogIn'
import Register from './pages/register/Register';
import { Home } from './pages/home/Home';
import Watch from './pages/watch/Watch';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
       <Routes>
          <Route path='/' exact element={<Register/>}/>
          <Route path='/login' exact element={<LogIn/>}/>
          <Route path='/home' exact element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
