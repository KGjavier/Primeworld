import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import BannerJobs from "../component/BannerJobs";

const JobListApplicant = (props) => {
    const [allJob, setAllJob] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/primejob", { withCredentials : true })
            .then((res) => setAllJob(res.data))
            .catch((err) => console.log(err))
    }, []);
    
        
    return (
        <div>
            <Nav />
            <BannerJobs/>
            <div className="main__opening">
                <div>
                    <h1 className="opening">Job Opening</h1>
                </div>
                <div className="display_list">
                <table>
                    <thead>
                        <tr>
                            <td className="col">Position</td>
                            <td className="col">Country</td>
                            <td className="col">Employer</td>
                            <td className="col">Qualification</td>
                            <td/>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                        allJob.length > 0 && 
                        allJob.map((Job, index) => (
                            <tr className="body-row" 
                                key={index}>
                                <td className="col">{Job.position}</td>
                                <td className="col">{Job.country}</td>
                                <td className="col">{Job.employer}</td>
                                <td className="col">{Job.qualification}</td>
                                <td className="col"> <Link className="applynow"to={"/Contact"}>Apply Now</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default JobListApplicant;

