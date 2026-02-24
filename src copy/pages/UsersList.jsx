import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function UsersList() {
    const users = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".user__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Users:", users);

    return (
        <div className="user">
            <div>
                <h1 className="text-4xl font-bold">UsersList</h1>
                <p className="mt-4">Oversigt over all usersList</p>
                <ul className="op_list">
                    <li><p>Avatar</p><p>Navn</p><p>Status</p></li>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`/UsersList/${user.id}`} className="user__button">
                                <div className="user__avatar">
                                    <img src={user.profilePicture} alt="" />
                                </div>
                            </Link>
                            <p>{user.name}</p>
                            <Link to={`/usersList/${user.id}`} className="task__button button">
                                Til usersList
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
