import { useLoaderData } from "react-router"

export default function Detail() {
    const user = useLoaderData();


    return (
        <>
            <h1>Activity Detail</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <table>
                <tbody>
                    <tr><th>Name:</th><td>{user.name}</td></tr>
                    <tr><th>Email:</th><td>{user.email}</td></tr>
                    <tr><th>Phone:</th><td>{user.phone}</td></tr>
                    <tr><th>Website:</th><td>{user.website}</td></tr></tbody>
            </table>
        </>
    )
} 