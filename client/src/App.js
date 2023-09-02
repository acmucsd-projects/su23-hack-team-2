import './App.css';
import AccountInfo from './components/AccountInfo';
import Inbox from './components/Inbox'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AccountInfo/>
      <Inbox/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/inbox" element={<Inbox />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;