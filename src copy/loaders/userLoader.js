import Cookies from "js-cookie";

export async function usersLoader() {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`https://timesag-backend.netlify.app/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const users = await response.json();
  return users;
}



export async function singleUserLoader({params}) {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }
const userId = params.userId;
  const response = await fetch(`https://timesag-backend.netlify.app/users/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user = await response.json();
  return user;
}


export async function currentUserLoader() {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`https://timesag-backend.netlify.app/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch current user");
  }

  const user = await response.json();
  return user;
}
