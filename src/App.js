import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home/Home';

import './assets/defaults.css';
import './assets/home.css';
import './assets/nav.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
