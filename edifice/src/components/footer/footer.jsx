import { Chia } from '../icons/icons';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-logo">
       <div className='chia'>
          <Chia /> <h1>CHIA</h1>
        </div>
        <p>Get started now, try our product</p>
       </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Help centre</li>
              <li>Account information</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help and Solution</h4>
            <ul>
              <li>Talk to support</li>
              <li>Support docs</li>
              <li>System status</li>
              <li>Covid response</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Update</li>
              <li>Security</li>
              <li>Beta test</li>
              <li>Pricing product</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 CHIA Inc. Copyright and rights reserved</p>
        <ul>
          <li>Terms and Conditions</li>
          <li></li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}



      
      