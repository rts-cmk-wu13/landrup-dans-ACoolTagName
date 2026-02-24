import Cookies from "js-cookie";

export async function tasksLoader() {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`https://timesag-backend.netlify.app/tasks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  const tasks = await response.json();
  return tasks;
}

export async function singleTaskLoader({ params }) {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }
  const taskId = params.taskId;

  const responses = await Promise.all([
    fetch(`https://timesag-backend.netlify.app/tasks/${taskId}`, {
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
    return response.json();
  }));

  const [task, users] = results;
  return { task, users };
}
