
// ...existing code...
// ...existing code...
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Fr4m3 from "./pages/fr4m3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fr4m3" element={<Fr4m3 />} />
      </Routes>
    </Router>
  );
}

export default App;
