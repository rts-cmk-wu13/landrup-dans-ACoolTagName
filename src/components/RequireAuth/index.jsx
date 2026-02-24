import { useEffect } from "react"
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function RequireAuth({ children }) { 
    const token = Cookies.get("jwtToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/", { replace: true });
        }
    }, [token]);

    if (!token)  return null;

    return <>{children}</>;
}