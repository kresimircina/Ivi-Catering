
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Gutenberg.css';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Naslovna from './pages/Naslovna';
import Blog from './pages/Blog';
import Kontakt from './pages/Kontakt';
import Usluge from './pages/Usluge';
import Vjencanja from "./pages/Vjencanja";
//import Uslugesingle from "./pages/Uslugesingle";  
import Onama from './pages/Onama';
import BlogSingle from "./pages/BlogSingle";
import Rezervacija from "./pages/Rezervacija";
//import Products from "./pages/Products";
//import Kategorije from "./pages/Kategorije";
//import SignIn from "./pages/SignIn";
//import Register from "./pages/Register";
//import Testnastranica from "./pages/Testnastranica";

import MyDetails from "./pages/admin/MyDetails";
import MyPosts from "./pages/admin/MyPosts";
import Settings from "./pages/admin/Settings";

//import Profil from "./components/zadaci/Profil";
//import Korisnici from "./components/zadaci/Korisnici"
//import Vjezba from "./components/zadaci/Vjezba"
//import Tecaj from "./components/zadaci/Tecaj"

import AdminLayout from "./pages/admin/AdminLayout";
                   
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Naslovna />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/usluge" element={<Usluge />} />
       
        
        <Route path="/usluga/:slug" element={<Vjencanja />} />
        <Route path="/o-nama" element={<Onama />} />
        <Route path="/blog/:slug" element={<BlogSingle />} />
        <Route path="/rezervacija" element={<Rezervacija />} />
        {/*<Route path="/kategorije" element={<Kategorije />} />*/}
        {/*<Route path="/signin" element={<SignIn />} /> */}
        {/*<Route path="/register" element={<Register />} />*/}

        <Route path="/admin" element={<AdminLayout />}> 
          <Route path="mydetails" element={<MyDetails />} />
          <Route path="myposts" element={<MyPosts />} />
          <Route path="settings" element={<Settings />} />
        </Route>



        {/*<Route path="/profil" element={<Profil />} />
        <Route path="/korisnici"element={<Korisnici />} /> 
        <Route path="/vjezba"element={<Vjezba />} />
        <Route path="/tecaj"element={<Tecaj />} />*/}
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

