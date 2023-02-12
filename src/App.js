import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Error */}
        <Route path="*" element={<Error404 />} />

        {/* Inicio*/}
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
