import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar';
import PagePath from './components/PagePath';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AccountInfo/>
      <NavBar/>
      <PagePath/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/navbar" element={<NavBar />} />
            <Route exact path="/pagepath" element={<PagePath />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;