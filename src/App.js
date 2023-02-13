import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Recomendaciones from "containers/pages/Recomendaciones";
import Menu from "containers/pages/Menu";
import Somos from "containers/pages/Somos";
import Especialidad from "containers/pages/Especialidad";
import Blog from "containers/pages/Blog";
import Contacto from "containers/pages/Contacto";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error */}
          <Route path="*" element={<Error404 />} />

          {/* Inicio*/}
          <Route path="/" element={<Home />} />
          <Route path="/recomendaciones" element={<Recomendaciones />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/somos" element={<Somos />} />
          <Route path="/especialidad" element={<Especialidad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
