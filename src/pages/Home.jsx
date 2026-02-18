import { Link, NavLink } from 'react-router';
import './navigation.css'

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/about">Go to About</Link>
        </>
    )
}