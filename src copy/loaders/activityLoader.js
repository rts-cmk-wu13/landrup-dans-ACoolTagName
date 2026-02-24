import Cookies from "js-cookie";

export async function activityLoader() {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`https://timesag-backend.netlify.app/projects`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  const projects = await response.json();
  return projects;
}



export async function singleProjectLoader({params}) {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }
const projectId = params.projectId;

const responses = await Promise.all([

  fetch(`https://timesag-backend.netlify.app/projects/${projectId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }),
  fetch(`https://timesag-backend.netlify.app/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })

]);

 const results = await Promise.all(responses.map(response => {
  
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  
  return response.json()

 }));

  const [project, users] = results;
  return { project, users };
}
