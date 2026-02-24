import Cookies from "js-cookie";
import { redirect } from "react-router";

export async function projectAction({ request }) {
    let token = Cookies.get("jwtToken");
    let formData = await request.formData();
    console.log("Form Data Submitted:", formData);
    let data = Object.fromEntries(formData);
    console.log("Parsed Form Data:", data);

    let response = await fetch("https://timesag-backend.netlify.app/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        console.error("project failed:", response.statusText);
        return { success: false };
    }

    let result = await response.json();
    console.log("project successful:", result);
    return redirect(`/sager/${result.id}`);

}
