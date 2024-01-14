import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestiPage from "./pages/TestiPage";
import SkPage from "./pages/SkPage";
import FaqPage from "./pages/FaqPage";
import NavbarComponent from "./components/NavbarComponent";

function App(){
  return(
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testi" Component={TestiPage} />
        <Route path="/sk" Component={SkPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>
    </div>
  );
}

export default App;