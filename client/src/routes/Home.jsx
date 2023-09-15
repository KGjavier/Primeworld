import Nav from '../component/Nav';
import BannerHome from '../component/BannerHome';
import Footer from '../component/Footer';
import "./Home.css"
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div>
            <Nav />
            <BannerHome />
            <div className='welcome'>
                <div className='top__welcome'>
                    <h1 className="slogan">THE GLOBAL LINK TO PHILIPPINES MANPOWER PROFICIENCY</h1>
                    <Link className="button__like" to="/Contact">Partner with us</Link>
                    
                </div>
                <div className="bottom__welcome">
                    <p>Welcome to <span>PrimeWorld Manpower Agency, Inc.</span> , a premier and POEA licensed
                        recruitment agency that has been providing top-quality manpower
                        solutions for over 25 years. Our team of highly skilled and dynamic
                        professionals is committed to delivering services of the highest standard
                        with utmost integrity, credibility, and efficiency.</p>
                    <p>We take pride in our ability to provide our clients with the best Filipino
                        workers who have undergone rigorous training, trade-testing, and skills
                        upgrading. This ensures that our clients receive top-quality manpower
                        solutions that meet their specific needs and requirements. With our
                        extensive bank of reserves, we have deployed thousands of professionals,
                        skilled, and semi-skilled workers to various countries worldwide.</p>
                    <p>As a top-tier recruitment agency, we continue to set the standard for
                        professionalism and expertise in the recruitment industry. We invite you
                        to explore our website to discover how we can provide you with the right
                        manpower solutions for your organization. Expect nothing less than the best
                        service, professionalism, and expertise in the recruitment industry with
                        PrimeWorld Manpower Agency, Inc.</p>
                </div>
            </div>
            <Footer />
            
            
            

        </div>
    );
}
export default Home;