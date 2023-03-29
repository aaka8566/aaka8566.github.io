
import './App.css';
import Footer from './components/Footer';
import Gitinfo from './components/Gitinfo';
import Introdiv from './components/Introdiv';
import Nav from './components/Navbar.jsx';
import Projects from './components/Projects';
import Techskills from './components/Techskills';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Introdiv/>
     <Techskills/>
     <Projects/>
     <Gitinfo/>
     <Footer/>
    </div>
  );
}

export default App;
