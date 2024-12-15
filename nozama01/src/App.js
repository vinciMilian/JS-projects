import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
