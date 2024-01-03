import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'; // Import your Navigation component
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Stock from './Stock';
import './App.css';

function App() {
  // Removed useState and count logic

  return (
    <Router>
      <Navigation /> {/* Your navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
