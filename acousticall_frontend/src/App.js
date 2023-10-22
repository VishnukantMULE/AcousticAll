import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
