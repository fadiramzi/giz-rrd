import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import Home from './components/Home'
import ToDo from './components/ToDo'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
       <Route exact path="/" element={<Home/>}/>
       <Route  path="todo" element={<ToDo/>}/>
       <Route  path="about" element={<About/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
