import './App.css';
import AccountInfo from './components/AccountInfo';
import NavBar from './components/NavBar'
import Inbox from './components/Inbox'
import Wishlist from './components/WishList';
import PostListingPage from './components/Post';
// import ProductListingFilter from './components/ProductListingFilter';
import ProductListing from './components/ProductListing';
import SignInPage from './components/SignIn';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import NewListing from "./components/NewListing"
import { useEffect } from 'react';
import { gapi } from 'gapi-script'

const clientId = "408051983758-p7n4273ka54c34e8nt5jm18q3kqmd6nb.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

  return (
    <main>
      <NavBar />
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<ProductListing />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/accountinfo" element={<AccountInfo />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            {/* <Route exact path="/productdetails" element={<ProductDetails />} /> */}
            <Route exact path="/newlisting" element={<NewListing />} />
            <Route exact path="/navbar" element={<NavBar />} />
            <Route exact path="/postlisting" element={<PostListingPage />} />
            <Route exact path="/productlisting" element={<ProductListing />} />
            <Route exact path="/signin" element={<SignInPage />} />
          </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;