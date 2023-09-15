import Nav from '../component/Nav';
import Footer from '../component/Footer';
import BannerAbout from '../component/BannerAbout';
import "./About.css"
function About() {
    return (
        <div>
            <Nav />
            <BannerAbout />
            <div className='history'>
                <h1 className='history__head'>History</h1>
                <p><span>PrimeWorld Manpower Agency, Inc. (PMA) is a prominent and esteemed recruitment agency
                    with over 25 years</span> of expertise in the industry, positioned as a major player in the
                    Philippine recruitment landscape. Consistently ranking among the top 50 of over 500
                    recruitment agencies in the Philippines for the past six years, PMA takes pride in its
                    exceptional performance in the field of manpower deployment.</p>
                <p>PMA was established on October 15, 1998, as a land-based recruitment firm under the
                    umbrella of PTJGC, with a primary goal to recruit, process, and deploy Filipinos abroad.
                    The agency is licensed and regulated by the Philippine Overseas Employment Administration
                    (POEA), ensuring compliance with labor laws and industry standards.</p>
                <p>PMA is managed and manned by an accomplished team of dynamic and competent professionals
                    committed to the core values of integrity, credibility, and efficiency in service delivery.
                    Driven by the principles of hard work, dedication, and integrity, PMA guarantees optimum
                    satisfaction to its clientele and principals.</p>
                <p>With its impressive track record, PMA has successfully deployed thousands of skilled and
                    semi-skilled professionals to some of the most prestigious business establishments in various
                    countries, including UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, Morocco, Sudan, Algeria, Oman,
                    Australia, Papua New Guinea, South Korea, Taiwan, China, Singapore, Malaysia, Japan, Hongkong,
                    Brunei, Cyprus, Honduras, Bermuda, Czech and Romania. PMA aggressively pursues its recruitment
                    activities, catering to the needs of its clients in the Asia, Europe and Middle East regions.</p>
                <p>PMA ensures that its clients are satisfied by providing only the best Filipino workers, carefully
                    selected through a rigorous process of training, trade-testing, and skills upgrading. The agency
                    maintains a high standard of physical and mental fitness among its workforce, ensuring their utmost
                    responsiveness to their duties. With an extensive bank of reserves, PMA can promptly and effectively
                    satisfy all labor categories that will fit the specific requirements of its clients.</p>
            </div>
            <Footer />
        </div>
    )
}
export default About;