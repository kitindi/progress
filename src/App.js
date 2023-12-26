import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashoard/Dashboard";
import Signup from "./pages/auth/Signup";
import Onboarding from "./pages/onboarding/Onboarding";
import Gradebook from "./pages/gradebook/Gradebook";
import Students from "./pages/students/Students";
import Calendar from "./pages/calender/Calendar";

import Planner from "./pages/planner/Planner";

function App() {
  return (
    <main className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboard" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gradebook" element={<Gradebook />} />
          <Route path="/students" element={<Students />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/planner" element={<Planner />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
