import { NavLink } from "react-router";
import Cookies from "js-cookie";
import "./navigation.css"; // Ensure your styles are imported
import { Form } from "react-router";
import { useState, useEffect } from "react";

export default function Navigation() {
    const userId = Cookies.get("userId");
    const username = Cookies.get("username");
    const [jwtToken, setJwtToken] = useState(Cookies.get("jwtToken"));
    useEffect(() => {
        const interval = setInterval(() => {
            setJwtToken(Cookies.get("jwtToken"));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setJwtToken(Cookies.get("jwtToken"));
        }, 500); // Check every 500ms

        return () => clearInterval(interval);
    }, []);

    if (!jwtToken) return null; // Hide navigation if not logged in
    console.log("userId:", userId, "username:", username); // Add this line

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li><NavLink to="/">Oversigt</NavLink></li>
                <li className="online_visible"><NavLink to="/sager">Sager</NavLink></li>
                    <NavLink to="/activities"><FaListUl className="list-icon" />activities</NavLink>
            </ul>
            <div className="online_visible navigation__online_user">
                <NavLink to={`/brugere/${userId}`} className="navigation__user-container">
                    <div className="navigation__avatar">
                        <img src="" alt="" />
                    </div>
                    <span className="navigation__username">{username}</span>
                </NavLink>
                <div className="navigation__logout">
                    <Form method="post" action="/logout" className="Logout__form">
                        <button type="submit" className="Logout__button button">Logud</button>
                    </Form>
                </div>

                <nav className="navigation">
                    <NavLink to="/"><CiHome className="home-icon" />Home</NavLink>
                    <NavLink to="/Profile"><IoMdPerson className="profile-icon" />Profil</NavLink>
                </nav>
            </div>
        </nav>
    );
}
