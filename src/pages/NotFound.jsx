import { Link } from 'react-router';
export default function NotFound() {

    return (
        <>
            <h1>404! Not Found</h1>
            <p>det er vi kede af</p>
            <Link to="/">Go back home</Link>
        </>
    )
}