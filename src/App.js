import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Layout props={<LandingPage />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
