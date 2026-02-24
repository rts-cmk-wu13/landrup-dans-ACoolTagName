import { NavLink } from 'react-router';
import { CiHome } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export default function Navigation() {

    return (
        <nav className="navigation">
            <NavLink to="/"><CiHome className="home-icon" />Home</NavLink>
            <NavLink to="/activities"><FaListUl className="list-icon" />activities</NavLink>
            <NavLink to="/Profile"><IoMdPerson className="profile-icon" />Profil</NavLink>
        </nav>
    )
}