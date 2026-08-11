import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import './Gutenberg.css';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Naslovna from './pages/Naslovna';
import Kontakt from './pages/Kontakt';
import Vjencanja from "./pages/Vjencanja";
import Onama from './pages/Onama';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Naslovna />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/usluga/:slug" element={<Vjencanja />} />
          <Route path="/o-nama" element={<Onama />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;