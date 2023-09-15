import Nav from '../component/Nav';
import Footer from '../component/Footer';
import BannerContact from '../component/BannerContact';
import React, { useState } from "react";
import "./Contact.css"

const Contact = () => {
    const [cname, setCname] = useState("");
    const [cemail, setCemail] = useState("");
    const [cphone, setCphone] = useState("");
    const [csubject, setCsubject] = useState("");
    const [cmessage, setCmessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!cname) {
            errors.cname = "Please enter your name";
        }
        if (!cemail) {
            errors.cemail = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(cemail)) {
            errors.cemail = "Please enter a valid email";
        }
        if (!cphone) {
            errors.cphone = "Please enter your contact number";
        } else if (!/^\d+$/.test(cphone)) {
            errors.cphone = "Please enter a valid contact number";
        }
        if (!csubject) {
            errors.csubject = "Please enter a subject";
        }
        if (!cmessage) {
            errors.cmessage = "Please enter a message";
        }
        return errors;
    };


        return (
            <div>
                <Nav/>
                <BannerContact/>
                <div className='contact__container2'>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <h1 className='heading__contact'>Get in touch</h1>
                    <div>
                        <label className="name__contact">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={cname}
                            onChange={(event) => setCname(event.target.value)} />
                        <div className='error__box2'>
                            {errors.cname && <i className="error">{errors.cname}</i>}
                        </div>
                    </div>
                    <div>
                        <label className="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={cemail}
                                onChange={(event) => setCemail(event.target.value)} />
                        <div className='error__box2'>
                            {errors.cemail && <i className="error">{errors.cemail}</i>}
                        </div>
                        
                    </div>
                    <div>
                        <label className="phone">Contact No.:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={cphone}
                                onChange={(event) => setCphone(event.target.value)} />
                        <div className='error__box2'>
                            {errors.cphone && <i className="error">{errors.cphone}</i>}
                        </div>
                    </div>
                    <div>
                        <label className="subject">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            value={csubject}
                                onChange={(event) => setCsubject(event.target.value)} />
                        <div className='error__box2'>
                            {errors.csubject && <i className="error">{errors.csubject}</i>}
                        </div>
                    </div>
                    
                    <div className="message__contact">
                        <label className="message">Message:</label>
                        <textarea
                            id="message"
                            value={cmessage}
                                onChange={(event) => setCmessage(event.target.value)} />
                    </div>
                        <div className='error__box2'>
                            {errors.cmessage && <i className="error">{errors.cmessage}</i>}
                        </div>
                    <button className="contact__button" type="submit">Submit</button>
                    </form>
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=primeworld%20manpower%20agency%20incorporated%20malate&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <Footer/>
            </div>
        )
    
}
export default Contact;