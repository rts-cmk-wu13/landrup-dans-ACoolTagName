import Cookies from "js-cookie";

export async function customersLoader() {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`https://timesag-backend.netlify.app/customers`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch customer");
  }

  const customers = await response.json();
  return customers;
}



export async function singleCustomerLoader({params}) {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Unauthorized");
  }
const customerId = params.customerId;
  const response = await fetch(`https://timesag-backend.netlify.app/customers/${customerId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch customer");
  }

  const customer = await response.json();
  return customer;
}
