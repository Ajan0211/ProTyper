import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src="src/assets/Layer 1.png"></img>

        <div className="nav-item">
          <a href="#home">Home</a>
        </div>
        <div className="nav-item">
          <a href="#Settings">Settings</a>
        </div>
        <div className="nav-item">
          <a href="#Shop">Shop</a>
        </div>
        <div className="nav-item">
          <a href="#Login/Signup">Login/SignUp</a>
        </div>
      </div>
      <div className="content">
        <div className="button">Start Game</div>
      </div>
    </div>
  );
}

export default App;
