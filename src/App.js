import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Login from './component/Login'; 
import WindowPopup from './component/WindowPopup';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path='/' exact element={<WindowPopup/>} />
          <Route path='/dashboard' exact element={<Dashboard/>} />

        </Routes>
      </div>    
    </Router>
  );
}

export default App;
