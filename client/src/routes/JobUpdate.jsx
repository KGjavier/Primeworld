import { useState, useEffect } from "react";
import axios from "axios";
import { Link ,useNavigate, useParams } from "react-router-dom";
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import "./JobForm.css"


const JobUpdate = (props) => {
    const { id } = useParams();
    const [position, setPosition] = useState("");
    const [employer, setEmployer] = useState("");
    const [country, setCountry] = useState("");
    const [qualification, setQualification] = useState("");
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/primejob/" + id, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setPosition(res.data.position);
                setEmployer(res.data.employer);
                setCountry(res.data.country);
                setQualification(res.data.qualification);
            })
            .catch((err) => console.log(err))
    }, [id]);
    
    const onSubmitHandler2 = (e) => {
        e.preventDefault();

        const updatedJob = {
            position,  
            employer, 
            country, 
            qualification, 
        }

        axios
            .put("http://localhost:8000/api/primejob/" + id,updatedJob, { withCredentials: true })
            .then((res) => {
                console.log("Update successful on backend", res);
                navigate('/User', { replace: true });
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setError(err.response.data.error.errors);
            });
    }

    return (
        <div className="main">
            <Nav />
            <div className="nav">
                <h1 className="addjob">Edit posting of {employer} </h1>
                <span ><Link to={'/User'} className="top_button">Back</Link></span>
            </div>
            <div>
                <form onSubmit={onSubmitHandler2}>
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
                            <button className="submit">Update</button>
                        </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};



export default JobUpdate;