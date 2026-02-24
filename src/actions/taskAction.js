import Cookies from "js-cookie";
import { redirect } from "react-router";

export async function taskAction({ request }) {
    let token = Cookies.get("jwtToken");
    let formData = await request.formData();

    let data = Object.fromEntries(formData);

    // Parse estimate as an integer (not float)
    data.estimate = parseInt(data.estimate, 10);

    // Make sure to send "title" instead of "name" if your backend expects it
    if (data.name) {
        data.title = data.name;
        delete data.name;
    }

    console.log("Parsed Form Data:", data);

    let response = await fetch("https://timesag-backend.netlify.app/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        console.error("task failed:", response.statusText);
        return { success: false };
    }

    let result = await response.json();
    console.log("task successful:", result);
    return redirect(`/sager/${result.projectId}`);
}
