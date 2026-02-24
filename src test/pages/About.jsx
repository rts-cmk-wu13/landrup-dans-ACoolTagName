import { Link, NavLink } from 'react-router';
import { FiBatteryCharging } from 'react-icons/fi';
import './navigation.css'

export default function About() {

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/"><FiBatteryCharging size="4rem" color="orange" /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink componet={<FiBatteryCharging />} to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>About</h1>
            <Link to="/">Back to Home</Link>
        </>
    )
}