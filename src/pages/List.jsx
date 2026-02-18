import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function List() {
    const users = useLoaderData();
    const { token } = useAuth();



    console.log(token)


    return (

        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/list/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    )
}