
import './App.css';
import Main from './Components/Main';
import {Route, Routes} from 'react-router-dom'
import Details from './Components/Details';
import Create from './Components/Create';

function App() {
  return (
    <>
   <Routes>
   <Route path="/" element={<Main/>}/>
   <Route path="/details" element={<Details/>}/>
   <Route path="/create" element={<Create/>}/>
   </Routes>
   </>
  );
}

export default App;
