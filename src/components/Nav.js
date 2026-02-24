import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Nav = () => {

  const location = useLocation();
  const[name, setName] = useState(null);

    useEffect( () => {
      const user = localStorage.getItem("username");
      if(user) setName(user);
    }, []

  );

  if(location.pathname === "/register") {
    return;
  }

  if(location.pathname === "/signin") {
    return;
  }
  
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    //window.location.reload();
    setName(null);
  }

  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./img/logo.svg" alt="logo" height="12"/> 
        </Link>
    
          <button
           className="navbar-toggler" 
           type="button" 
           data-bs-toggle="collapse"
           data-bs-target="#mainNavbar" 
           aria-controls="mainNavbar"
           aria-expanded="false" 
           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span> 
          </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            
            <li className="nav-item dropdown text-end">
              <Link className="nav-link dropdown-toggle" to="#!" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usluge</ Link>
                <ul className="dropdown-menu" aria-labelledby="ddElectric">
                  <li><Link className="dropdown-item text-end" to="/usluga/vjencanja">Vjenčanja</Link>
                  </li>
                  <li><Link className="dropdown-item text-end" to="/usluga/privatni-eventi">Privatni eventi</Link>
                  </li>
                   <li><Link className="dropdown-item text-end" to="/usluga/poslovni-eventi">Poslovni eventi</Link>
                  </li>
                </ul>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link text-end" to="/kategorije">Kategorije</Link>
            </li>*/}
            <li className="nav-item">
              <Link className="nav-link text-end" to="/o-nama">O nama</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-end" to="/kontakt">Kontakt</Link>
            </li>
            
            {name ? (
              <li className="nav-item">
                <Link className="nav-link text-end" to="/admin">
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              { name ? (
                <button onClick={logOut} className="btn btn-primary">Dobrodošli,
                {name}</button>
              ) : (
              <Link className="nav-link" to="/signin" title="Sign in">
                <img src="./img/acc-wrap.svg" alt="Sign in" className="icon-sm"/>
                 </Link>
              )
              }
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" title="Cart">
                <img src="./img/cart-wrap.svg" alt="Cart" className="icon-lg "/>
              </Link>
            </li>
          </ul>
      
        </div>
      </div>
    </nav>
    
  )
}

export default Nav
