import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ArtPortfolio from './pages/ArtPortfolio';
import DevProjects from './pages/DevProjects';
import Resume from './pages/Resume';

import './assets/defaults.css';
import './assets/home.css';
import './assets/nav.css';
import './assets/animations.css';
import './assets/resume.css';
import './assets/art.css'

import Nav from './universal/Nav';
import Footer from './universal/Footer';
import Colors from './universal/Colors';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Developer' element={<DevProjects />} />
          <Route path='/Researcher' element={<DevProjects />} />
          <Route path='/Designer' element={<ArtPortfolio />} />
          {/** Reference page for theme colors */}
          <Route path='/Colors' element={<Colors />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
