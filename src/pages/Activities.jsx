import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function Activities() {
    const activities = useLoaderData();
    const { token } = useAuth();



    console.log(token)


    return (
    <>
        /* --- SEACHEFIELD --- */
        <h1>Aktiviteter</h1>

        <ul>
            {activities.map(activity => (
                <li key={activity.id}>
                    <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
                </li>
            ))}
        </ul>
    </>
    )
}