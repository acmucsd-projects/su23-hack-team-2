import './App.css';
import NavBar from './components/NavBar';
import Inbox from './components/Inbox';
import Pathway from './components/Pathway';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Inbox/>
      <NavBar/>
      <Pathway/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<Inbox />} />
            <Route exact path="/inbox" element={<NavBar />} />
            <Route exact path="/pathway" element={<Pathway />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;