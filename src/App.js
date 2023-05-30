
import About from './Components/About'
import Home from './Components/home'
import Navbar from './Components/navbar'
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
