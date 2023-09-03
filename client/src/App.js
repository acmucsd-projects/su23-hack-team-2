import './App.css';
import NavBar from './components/NavBar';
import Inbox from './components/Inbox'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Inbox/>
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<Inbox />} />
            <Route exact path="/inbox" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;