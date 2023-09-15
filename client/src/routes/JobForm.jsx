import { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import axios from "axios";
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import JobListUser from '../routes/JobListUser';
import "./JobForm.css"

const JobForm = (props) => {
    const [position, setPosition] = useState("");
    const [employer, setEmployer] = useState("");
    const [country, setCountry] = useState("");
    const [qualification, setQualification] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authCheck", { withCredentials : true })
            .then((res) => console.log(res))
            .catch((err) => {
                window.location.replace("/login");
            })
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const newJob = {
            position,
            employer,
            country,
            qualification,
        }

        axios
            .post("http://localhost:8000/api/primejob",newJob, { withCredentials: true })
            .then((res) => {
                console.log("Creation successful on backend")
                console.log(res)
                window.location.reload();
                
            })
            .catch((err) => {
                    console.log(err);
                    setError(err.response.data.error.errors);
            })
    }

    return (
        <div className="main">
            <Nav/>
            <div className="nav">
                <h1 className="addjob">Job Posting</h1>
                <button className="top_button" type="submit" onClick={(e) => navigate("/logout")}>Log Out</button>
            </div>
            <div>
                <form onSubmit={onSubmitHandler}>
                    <div className="container__main">
                        <div className="subcontainer__1">
                            <div className="position">
                                <label>Position:</label>
                                <input
                                    type="text"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)} />
                                <div className="error__box">
                                    {(position.length >0 && position.length <=2) ? < i  > Must be atleast 3 characters.</i> : ""}
                                    <br/>{error.position ? <i className="err-msg">{error.position.message}</i> : null}
                                    
                                </div>
                            </div>
                            <div className="employer">
                                <label>Employer:</label>
                                <input
                                    type="text"
                                    value={employer}
                                    onChange={(e) => setEmployer(e.target.value)} />
                                <div className="error__box">
                                    {(employer.length >0 && employer.length <=2) ? < i > Must be atleast 3 characters.</i> : ""}
                                    <br/>{error.employer ? <i className="err-msg">{error.employer.message}</i> : null}
                                    
                                </div>
                            </div>
                            <div className="country">
                                <label>Country:</label>
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)} />
                                <div className="error__box">
                                    {(country.length > 0 && country.length <= 2) ? < i > Must be atleast 3 characters.</i> : ""}
                                    <br/>{error.country ? <i className="err-msg">{error.country.message}</i> : null}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="subcontainer__2">
                            <div className="qualification">
                                <label>Qualification:</label>
                                <textarea
                                    type="text"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)} />
                                <div className="error__box">
                                    {(qualification.length > 0 && qualification.length <= 15) ? < i > Must be atleast 15 characters.</i> : ""}
                                    <br />{error.qualification ? <i className="err-msg">{error.qualification.message}</i> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="button_container">
                            <button className="submit">Submit</button>
                        </div>
                </form>
            </div>
            <JobListUser/>
            <Footer />
        </div>
    );
};

export default JobForm;
