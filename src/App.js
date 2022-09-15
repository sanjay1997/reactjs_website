import Home from './components/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
