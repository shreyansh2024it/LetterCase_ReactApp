//import logo from './logo.svg';
import './App.css';

import Textform from './Textform';

import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar title="ReactApp" about="About us"/>
    <div className="container my-3">
      <Textform/>
     
      
    
    </div>
    </>
  );
}

export default App;
