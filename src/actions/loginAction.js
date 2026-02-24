import Cookies from "js-cookie";
import { redirect } from "react-router";

export async function loginAction( {request}) {
  let formData = await request.formData();
  console.log("Form Data Submitted:", formData);
  let data = Object.fromEntries(formData);
  console.log("Parsed Form Data:", data);

  let response = await fetch("https://timesag-backend.netlify.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.error("Login failed:", response.statusText);
    return { success: false };
  }

  let result = await response.json();
  console.log("Login successful:", result);
  Cookies.set("jwtToken", result.token);
  Cookies.set("username", result.name);
  Cookies.set("userId", result.id);
  return redirect("/brugere/" + result.id);
}

export async function logoutAction() {
  // Remove authentication cookies
  Cookies.remove("jwtToken");
  Cookies.remove("username");
  Cookies.remove("userId");
  // Redirect to login page
  return redirect("/");
}
