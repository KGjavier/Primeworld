import { useState, useEffect } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import "./JobListUser.css"

const JobListUser = (props) => {
    const [allJob, setAllJob] = useState([]);
    const navigate = useNavigate();

    const deleteJob = (JobId) => {
    axios.delete("http://localhost:8000/api/primejob/" + JobId, { withCredentials: true })
            .then(() => {
                console.log("Successful deleted from backend");
                removeFromDom(JobId);
                window.location.reload();

            })
            .catch((err) => console.log(err));  
    }

    const removeFromDom = (JobId) => {
        setAllJob(allJob.filter(job => job.id !== JobId));
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/primejob", { withCredentials : true })
            .then((res) => setAllJob(res.data))
            .catch((err) => console.log(err))
    }, []);
    
        
    return (
        <div className="main__opening">
            <div>
                <h1 className="opening">Job Opening</h1>
    
            </div>
            <div className="display_list">
                <table>
                    <thead>
                        <tr>
                            <th className="col">Position</th>
                            <th className="col">Country</th>
                            <th className="col">Employer</th>
                            <th className="col2">Qualification</th>
                            <th/>
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
                                <td className="col2">{Job.qualification}</td>
                                <td className="col"><button className="Dbutton" onClick={() => deleteJob(Job._id)}>Delete</button> <Link className="Ebutton"to={`/Jobprime/edit/${Job._id}` }>Edit</Link></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobListUser;