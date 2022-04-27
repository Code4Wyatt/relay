
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Login from "../src/pages/Login/Login"

function App() {
  return (
     <Router>
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
