import Nav from '../component/Nav';
import BannerEmployer from '../component/BannerEmployer';
import Footer from '../component/Footer';
import "./Employer.css"
import Clients1 from '../assets/Clients1.png';
import Clients2 from '../assets/Clients2.png';



function Employer() {
    return (
        <div>
            <Nav />
            <BannerEmployer />
            <div className='main__con'>
                <h1 className="title">THE GLOBAL LINK TO PHILIPPINES MANPOWER PROFICIENCY</h1>
                <div className='main__employer'>
                    <div className='top__employer'>
                        <p><span className='red'>PrimeWorld Manpower Agency, Inc. (PMA)</span> is your esteemed partner in accessing
                        the best Filipino workers for your business needs. With over 25 years of expertise
                        in providing highly-skilled and motivated professionals to prestigious establishments
                        worldwide, we are committed to ensuring the satisfaction of our clients through our
                        rigorous recruitment process, adherence to labor laws and industry standards, and
                        unwavering dedication to excellence</p>
                        <img src={Clients1} alt="Clients" className="clients1" />
                    </div>
                    <div className="mid__employer">
                        <img src={Clients2} alt="Clients" className="clients2"/>
                        <p>Partner with PMA and experience the benefits of working with a trusted agency that
                        consistently ranks among the top recruitment agencies in the Philippines.Our dynamic
                        and competent team of professionals upholds our core values of integrity, credibility,
                        and efficiency in service delivery, and we are committed to providing the highest level
                        of service and support to our clients. Let us help you achieve your business objectives
                        with the best Filipino workers in the market, who are equipped with the necessary skills 
                        to perform their duties effectively.</p>
                    </div>
                    <div className="bottom__employer">
                        
                        <h2 className='title2'>RECRUITING FROM THE PHILIPPINES THRU PMA</h2>
                        <p>The PMA could provide workers to employers only after complying with the
                            basic documents required by the Philippine Overseas Employment
                            Administration (POEA). These documents are necessary to accredit the
                            principals with the POEA which are:</p>
                        <ol>
                            <li>A copy of the commercial registration of the foreign principal.</li>
                            <li>A Service Contract / Agreement between the PMA and the
                                employer/principal duly authenticated by the Philippine Embassy or its
                                representative office in the country of employment.</li>
                            <li>Letter request from the employer on the list of workers they need,
                                mentioning the salary offered and the positions open.</li>
                            <li>Special Power of Attorney appointing PMA as the local recruitment agent
                                of the foreign principal.</li>
                            <li>Master Employment Contract, which the foreign principal wishes to use,
                                likewise stating the compensation package and other incentives or
                                benefits.</li>
                            <li>In case of Australian principals - sponsorship nomination approval from
                                the Department of Immigration and Multicultural and Indigenous Affairs
                                (DIMIA) of Australia.</li>
                            <li>In case of Saudi Arabian principals, visa certificate issued by the Royal
                                Embassy of Saudi Arabia in the Philippines.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Employer;


