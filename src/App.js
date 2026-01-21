import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import DevProjects from './pages/DevProjects';
import Resume from './pages/Resume';

import './assets/defaults.css';
import './assets/home.css';
import './assets/nav.css';

import Nav from './universal/Nav';
import Footer from './universal/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Coding' element={<DevProjects />} />
          <Route path='/Art' element={<ArtPortfolio />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
