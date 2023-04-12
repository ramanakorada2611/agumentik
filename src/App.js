
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Show from './Components/Show';
// import New from './Components/New';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Show/>}/>
    <Route  path='/signup' element={<SignUp/>}/>
    <Route path='/signin' element={<SignIn/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
