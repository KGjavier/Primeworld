import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Home from '../routes/Home';
import Footer from '../component/Footer';
import BannerHome from '../component/BannerHome';
import "./LoginReg.css"

const LoginReg = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmPw] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    const onSubmitHandler = (e) => {
    e.preventDefault();

    const newUser = {
        fname,
        lname,
        email,
        password,
        confirmpw,
    };

    axios
        .post(`http://localhost:8000/api/user`, newUser, {withCredentials: true,})
        .then((res) => {
            console.log(res);
            console.log(res.data.newUser);

    })
        .catch((err) => {
            console.log(err.response.data.errors);
            
        
        });
    };

    const onSubmitLoginHandler = (e) => {
    e.preventDefault();

    const newUserLogin = {
        loginEmail,
        loginPw,
    };

    axios
        .post(`http://localhost:8000/api/login`, newUserLogin, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            window.localStorage.setItem("appUserId", res.data._id);
            window.localStorage.setItem("appUserName", res.data.fname);
            console.log(res.data);
            navigate("/User");
        })
        .catch((err) => {
            console.log(err);
        });
};

return (
    <div>
        <Home/>
        
        <div className="reg__container">
            <Link className="button__x" to="/">X</Link>
            <form className="regform" onSubmit={onSubmitHandler}>
                <h1 className="heading__reg">Registration Form</h1>
                <div>
                    <label>First Name:*</label>
                    <input
                        onChange={(e) => setFname(e.target.value)}
                        type="text"
                        value={fname}
                        name="fname"
                    />
                </div>
                <div>
                    <label>Last Name:*</label>
                    <input
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        value={lname}
                        name="lname"
                    />
                </div>
                <div>
                    <label>Email:*</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        value={email}
                        name="email"
                    />
                </div>
                <div>
                    <label>Password:*</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        name="password"
                    />
                </div>
                <div>
                    <label>ConfirmP:*</label>
                    <input
                        onChange={(e) => setConfirmPw(e.target.value)}
                        type="password"
                        value={confirmpw}
                        name="cpassword"
                    />
                </div>
                <input className="Create" type="submit" value="Create Account" />
                <p className="note">* Indicates a require field</p>
            </form>
            <hr></hr>
            <form onSubmit={onSubmitLoginHandler} className="loginform">
                
                <div  className="email__container">
                    <label>Email:*</label>
                    <input
                        onChange={(e) => setLoginEmail(e.target.value)}
                        type="text"
                        value={loginEmail}
                        name="email"
                    />
                    
                </div>
                <div>
                    <label>Password:*</label>
                    <input
                        onChange={(e) => setLoginPw(e.target.value)}
                        type="password"
                        value={loginPw}
                        name="email"
                    />
                </div>
                <div>
                    <input className="Create" type="submit" value="Submit" />
                </div>
            </form>
        </div>
        <div className="background"/>
           
    </div>

);
};

export default LoginReg;



