import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AccountInfo/>
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/navbar" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;