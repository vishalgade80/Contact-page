import './App.css'
import Header from './components/Header';
import Home from './components/Home';
 import Contactus from './components/Contactus';
 import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
    <Header />
    <Contactus/>
    {/* <Router>
            <Routes>
            
                      <Route exact path='/Home' element={<Home/>}/>
                      <Route exact path='/Contact' element={<Contactus/>}/>
            </Routes>
    </Router> */}
        
        
       <Footer/>
    
    </div>
  );
}

export default App;
