import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Upcoming from './routes/Upcoming';
import Next from './routes/Next';
import Past from './routes/Past';
import Latest from './routes/Latest';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/next" element={<Next />} />
        <Route path="/past" element={<Past />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
