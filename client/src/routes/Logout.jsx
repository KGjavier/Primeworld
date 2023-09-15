import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/logout`, { withCredentials: true })
            .then((res) => {
                console.log("logged out");
                navigate("/Login")
            })
            .catch((err) => console.log(err));
    }, []);
};

export default Logout;