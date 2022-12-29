import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import People from "./screens/People";
import Person from "./components/person";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<People />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
