import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function Sager() {
    const projects = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".project__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Projects:", projects);

    return (
        <div className="project">
            <div>
                <h1 className="text-4xl font-bold">Sager</h1>
                <Link to="?create=true" className="project__button">Oprat ny Sage</Link>
                <p className="mt-4">Oversigt over Sager</p>

                <ul>
                    {project.tasks.map(task => (
                        <li key={task.id}>
                            <Link to={`/opgave/${task.id}`} className="task__button">
                                {task.title}, {task.project?.name || "No Project"}, {task.project?.customer?.company || "No Customer"}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}




