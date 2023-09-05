import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import PagePath from './components/PagePath'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <NavBar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;