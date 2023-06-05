
import React from 'react';
import './App.css';
import Home from './components/Home';
// import Footer from './components/Footer';
// import Gitinfo from './components/Gitinfo';
// import Introdiv from './components/Introdiv';
// import Nav from './components/Navbar.jsx';
// import Projects from './components/Projects';
// import Techskills from './components/Techskills';

function App() {
  React.useEffect(() => {
    document.title = 'Aakash Chakravarty Portfolio';
    }, []);
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
