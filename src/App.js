import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Login from './component/Login'; 
import WindowPopup from './component/WindowPopup';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path='/' exact element={<WindowPopup/>} />

        </Routes>
      </div>    
    </Router>
  );
}

export default App;
