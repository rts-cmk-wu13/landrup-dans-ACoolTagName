import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function OpgaveDetalier() {
    const { task } = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".task__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Task:", task);

    // filepath: c:\Users\U2507996\WebDev\after summor\dashborad_activiteis\timesag\src\pages\OpgaveDetalier.jsx
    return (
        <div className="task">

            <Link to={`/sager`} className="task__button">tilbage til Sager</Link>
            <h2 className="text-4xl font-bold">{task.title} og project navn</h2>
            <h3 className="text-4xl font-bold">
                {task.project?.customer?.company
                    ? `${task.title} og ${task.project.customer.company}`
                    : task.title}
            </h3>

            <Link to={`/sager/${task.projectId}`} className="task__button">tilbage til Sag {task.project?.name || "Ingen projekt info"}</Link>


            <div>
                <p><span className="indicater">Kunde: </span>{task.project?.customer?.company || "Ingen kunde info"}</p>
                <p><span className="indicater">Sag: </span>{task.project?.name || "Ingen projekt info"}</p>
                <p><span className="indicater">Navn: </span>{task.title}</p>
                <p><span className="indicater">Beskrivelse: </span>{task.description}</p>
                <p><span className="indicater">Hvem er på opgaven: </span></p>
                <ul className="op_list">
                    {task.assignedTo && task.assignedTo.length > 0 ? (
                        task.assignedTo.map(user => (
                            <li key={user.id}><p>{user.name || user.email}</p></li>
                        ))
                    ) : (
                        <li>Ingen brugere er tildelt</li>
                    )}
                </ul>
            </div>
        </div>
    );
}


