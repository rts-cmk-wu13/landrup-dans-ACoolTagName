import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState();
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log("username: emilys, password: emilyspass");
    const from = location.state?.from?.pathname || "/";


    async function handleLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData)


        // valider her...

        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const userdata = await response.json();



        if (!response.ok) {
            setError(userdata.message || userdata.error || "Please provide valid credentials");
        } else {
            login(userdata.accessToken);
            navigate(from, { replace: true });
        }


    }

    return (
        <Form onSubmit={handleLogin}>
            <div className="formgroup">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            {error && (<div>{error}</div>)}
            <button type="submit">Log in</button>
        </Form>
    )
}