import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Login} />
      </Router>
    </div>
  );
}

export default App;
