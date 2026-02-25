import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

const Footer = () => {
  const location = useLocation();

  if(location.pathname === "/signin") {
    return;
  }
  
  return (
    <>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <h4>Usluge</h4>
                  <ul>
                    <li>
                      <Link to="/usluga/vjencanja">Vjenčanja</ Link>
                    </li>
                    <li>
                      <Link to="/usluga/privatni-eventi">Privatni eventi</ Link>
                    </li>
                    <li>
                      <Link to="/usluga/poslovni-eventi">Poslovni eventi</ Link>
                    </li>
                   
                  </ul>
                
              </div>
              <div className="col-md-4 mx-auto">
                <h4>Informacije</h4>
                  <ul>
                    <li>
                      <Link to="/o-nama">O nama</ Link>
                    </li>
                    <li>
                      <Link to="/kontakt">Kontakt</ Link>
                    </li>
                    
                  </ul>

              </div>
              
              
            </div>

           
          
          </div>
          <div className="col-md-4">
            
            
          
            
          </div>

          
        </div>
        <button className="btn btn-danger" onClick={ScrollToTop}>TOP</button>
      </div>
    </footer>
    </>
  )
}

export default Footer
