import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footContainer">
        <div className="address">
            <div className="logo">LOGO</div>
            <p>Address: 60-49 Road 11378</p>
            <p>Phone: +234 785 489 2387</p>
            <p>Email: hello@gmail.com</p>
        </div>
        <div className="mid">
            <div className="mid-title">Useful Links</div>
            <div className="mid-links">
            <div className="left">
                <li>About Us</li>
                <li>About Our Shop</li>
                <li>Secure Shopping</li>
                <li>Delivery information</li>
                <li>Privacy Policy</li>
                <li>Our Sitemap</li>
            </div>
            <div className="right">
                <li>Who We Are</li>
                <li>Our Services</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Innovation</li>
                <li>Testimonials</li>
            </div>
            </div>
        </div>
        <div className="update">
            <div className="update-title">Join Our Newsletter Now</div>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className="inputComponent">
            <input placeholder="Enter your mail" />
            <button>SUBSCRIBE</button>
            </div>
            <div className="copyright">Copyright &copy; 2023 All rights reserved</div>
        </div>
    </div>
  )
}

export default Footer;