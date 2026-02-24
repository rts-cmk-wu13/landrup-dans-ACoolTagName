import { useLoaderData, Link, Form, useSearchParams } from "react-router";
import Cookies from "js-cookie";


export default function UserDetalier() {
    const { user } = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";
    const username = Cookies.get("username");
    const useremail = Cookies.get("useremail");

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".user__dialog").showModal();
        }, 100);
    }

    console.log("Loaded User:", user);

    // filepath: c:\Users\U2507996\WebDev\after summor\dashborad_activiteis\timesag\src\pages\OpgaveDetalier.jsx
    // add <img src={user.profilePicture} alt="" /> inside user__avatar div when implementing profile pictures in database
    // ul is for listing user related items like tasks or projects, currently empty becose of error wit data fetching
    return (
        <div className="user">
            <Link to={`/usersList`} className="user__button">Til all brugere</Link>
            <div className="flex_right">
                <div className="user__avatar-profile">
                </div>
                <div className="user__details">
                <p><span className="indicater">Navn: </span>{username}</p>
                <p><span className="indicater">E-mail: </span>{useremail}</p>
                </div>
            </div>
            <ul></ul>
        </div>
    );
}


