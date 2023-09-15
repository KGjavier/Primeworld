import { Component } from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';


class Nav extends Component{

    state = { clicked: false };
    handleclick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div>
                <nav className="navbaritems">
                    <h1 className="nav__logo"><span className="prime">PrimeWorld</span> Manpower Agency Inc.</h1>
                    <div className="menu__icons" onClick={this.handleclick}>
                        <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars" }></i>
                    </div>
                    <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
                        <li><Link className="nav__links" to="/">Home</Link></li>
                        <li><Link className="nav__links" to="/About">About</Link></li>
                        <li><Link className="nav__links" to="/Employer">Employers</Link></li>
                        <li><Link className="nav__links" to="/Job">Jobs</Link></li>
                        <li><Link className="nav__links" to="/Contact">Contact</Link></li>
                        <li><Link className="nav__button" to="/Login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Nav;
