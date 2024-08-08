//React router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import HomePage from './pages/home';
import NavbarComponent from './components/navbar/navbar';
import FooterComponent from './components/footer/footer';

//Stylesheet

import "./App.css";

function App() {
  return (
    <div className="main-body">
      <NavbarComponent/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App
