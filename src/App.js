import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Password from './pages/Password/Password';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reset-password" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
