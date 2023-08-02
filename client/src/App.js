import logo from '../src/assets/tritontrade.png';
import './App.css';
import AccountInfo from './components/AccountInfo';
import Inbox from './components/Inbox'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Inbox/>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<Inbox />} /> */}
            <Route exact path="/" element={<AccountInfo />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;