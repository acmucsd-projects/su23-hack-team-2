<<<<<<< Updated upstream
=======
import ProductListing from './components/ProductListing';
import Navbar from './components/NavBar';
>>>>>>> Stashed changes
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <main>
      <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
>>>>>>> Stashed changes
  );
}

export default App;
