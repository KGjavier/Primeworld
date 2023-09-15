import "./Footer.css"
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import  Primelogo  from '../assets/Primelogo.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="company">
                <p>PrimeWorld Manpower Agency Inc.</p>
                <p><img src={Primelogo} alt="PrimeWorld Logo" className="plogo"></img></p>
            </div>
            <div className="menu__footer">
                <ul className="footer__menu">
                    <li><Link className="footer__links" to="/">Home</Link></li>
                    <li><Link className="footer__links" to="/About">About</Link></li>
                    <li><Link className="footer__links" to="/Employer">Employer</Link></li>
                    <li><Link className="footer__links" to="/Job">Jobs</Link></li>
                    <li><Link className="footer__links" to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="contact__main" >
                <ul className="contact__footer">
                    <p>Contact</p>
                    <li className="details"><span className="bold_details">Email:</span>  marketing@primeworldmanpower.com</li>
                    <li className="details"><span className="bold_details">Telephone:</span> +63 5360775</li>
                    <li className="details">
                        <span className="bold_details">Address:</span> 3rd Floor Queen Rose Bldg.,<br />
                                1004 San Andres St, Malate, <br />
                                Manila, Metro Manila, Philippines
                    </li>
                </ul>
                <div className="icons__footer">
                <SocialIcon url="https://linkedin.com/in/pat-javier-a374a42a" className="icon__footer" bgColor="#ff0000" />
                <SocialIcon url="https://facebook.com//primeworld.ma.inc" className="icon__footer" bgColor="#ff0000"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;