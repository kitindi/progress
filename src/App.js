import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashoard/Dashboard";
import Signup from "./pages/auth/Signup";
import Onboarding from "./pages/onboarding/Onboarding";

function App() {
  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboard" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
