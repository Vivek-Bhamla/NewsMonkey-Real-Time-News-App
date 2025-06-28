import "./App.css";
import NavBar from "./NavBar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/business"
            element={<News key="business" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
          <Route
            path="/general"
            element={<News key="general" category="general" />}
          />
          <Route
            path="/health"
            element={<News key="health" category="health" />}
          />
          <Route
            path="/science"
            element={<News key="science" category="science" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" category="technology" />}
          />
          <Route path="/" element={<News key="general" category="general" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
