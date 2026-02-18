import { Link, NavLink } from 'react-router';
import './navigation.css'

export default function Home() {

    return (
        <>
            <section className="hero-image">
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
            </section>
            <section className="activities">
            </section>
            <section className="newsletter">

            </section>
            <section className="ratings">

            </section>
            <section className="contact">

            </section>
        </>
    )
}