import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact, Home } from './pages';

function App() {
  
  return (
    <div className="font-Inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
