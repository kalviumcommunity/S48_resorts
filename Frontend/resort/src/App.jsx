import './App.css';
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} /> {/* Define the route for the Landingpage component */}
      </Routes>
    </Router>
  );
}

export default App;
