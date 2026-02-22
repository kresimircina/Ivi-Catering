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
              <div className="col-md-3">
                <h4>Explorer</h4>
                  <ul>
                    <li>
                      <Link to="#!">Electric bikes</ Link>
                    </li>
                    <li>
                      <Link to="#!">City bikes</ Link>
                    </li>
                    <li>
                      <Link to="#!">Kids bikes</ Link>
                    </li>
                    <li>
                      <Link to="#!">Accesories</ Link>
                    </li>
                    <li>
                      <Link to="#!">Outlet</ Link>
                    </li>
                    <li>
                      <Link to="#!">Business</ Link>
                    </li>
                    <li>
                      <Link to="#!">Insurance Electric</ Link>
                    </li>
                    <li>
                      <Link to="#!">Size guide</ Link>
                    </li>
                  </ul>
                
              </div>
              <div className="col-md-3">
                <h4>About</h4>
                  <ul>
                    <li>
                      <Link to="#!">About us</ Link>
                    </li>
                    <li>
                      <Link to="#!">Journal</ Link>
                    </li>
                    <li>
                      <Link to="#!">Reviews</ Link>
                    </li>
                    <li>
                      <Link to="#!">Press</ Link>
                    </li>
                    <li>
                      <Link to="#!">Jobs</ Link>
                    </li>
                  </ul>

              </div>
              <div className="col-md-3">
                <h4>Help</h4>
                  <ul>
                    <li>
                      <Link to="#!">Contact</ Link>
                    </li>
                    <li>
                      <Link to="#!">FAQ</ Link>
                    </li>
                    <li>
                      <Link to="#!">Delivery</ Link>
                    </li>
                    <li>
                      <Link to="#!">Assembly & manuals</ Link>
                    </li>
                    <li>
                      <Link to="#!">Payment options</ Link>
                    </li>
                    <li>
                      <Link to="#!">Privacy policy</ Link>
                    </li>
                    <li>
                      <Link to="#!">Terms & conditions</ Link>
                    </li>
                  </ul>

              </div>
              
            </div>

           
          
          </div>
          <div className="col-md-4">
            <h4>Join the ride.</h4>
            <div className="subscribe d-flex align-items-end">
              <form>
               <label for="email">Sign up for our newsletter.</label>
	                <input type="email" id="email" name="email" className="email" placeholder="Enter your email address here" required/>
                  <button type="button" className="btn btn-outline-dark">Subscribe</button>

                <p>
                  <input type="checkbox"  name="" value="I agree"/>By signing up, I agree to the <Link to="#!">privacy policy</ Link> of Veloretti.
                </p>
              </form>
            </div>

            <div className="row">
              <div className="d-flex icons justify-content-start mt-3 gap-4">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-tiktok"></i>
                
              </div>
            </div>
            
            
          
            
          </div>

          
        </div>
        <button className="btn btn-danger" onClick={ScrollToTop}>TOP</button>
      </div>
    </footer>
    </>
  )
}

export default Footer
