import { useEffect } from "react";
import { useLoaderData, Link, Form, useSearchParams, useNavigation } from "react-router";
import Cookies from "js-cookie";


export default function ActivityDetalier() {
    const { project, users } = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";
    const username = Cookies.get("username");

    console.log(project)
    console.log(users)

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".task__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Project:", project);




    return (
        <div className="project">

            <h1 className="text-4xl font-bold" >{project.customer.company}</h1>
            <Link to="/sager" className="project__button">tilbage til oversigt</Link>
            <p className="mt-4">{project.name}</p>
            <div>
                <p><span className="indicater">Kunde: </span>{project.customer.company}</p>
                <p><span className="indicater">Navn: </span>{project.name}</p>
                <p><span className="indicater">Beskrivelse: </span>{project.description}</p>
                <Link to="?create=true" className="task__button button">Opret ny opgave</Link>
                <p><span className="indicater">Opgaver: </span></p>
                <ul className="task_list op_list">
                    <li>
                        <p className="task_title indicater">Title</p>
                        <p className="task_status indicater">Status</p>
                        <p className="task_estimate indicater">Timer</p>
                        <p className="task_user indicater">Bruger</p>
                        <p className="task_link indicater">Link</p>
                        </li>
                    {project.tasks.map(task => (
                        <li key={task.id}>
                            <p className="task_title">{task.title}</p>
                            <p className="task_status">{task.status}</p>
                            <p className="task_estimate">{task.estimate.toFixed(1)}</p>
                            <p className="task_user">{users.find(user => user.id === task.userId)?.name} </p>
                            <Link to={`/opgaver/${task.id}`} className="task__button button">
                                Til opgaven</Link>
                        </li>
                    ))}
                </ul>


            </div>
            <dialog className="task__dialog">
                <Form method="post">
                    <p>Opret ny opgave</p>
                    <div className="formgroup">
                        <label>Kunde: {project.name}</label>
                        <input type="hidden" name="projectId" value={project.id} required />
                    </div>
                    <div className="formgroup">
                        <label>Navn:</label>
                        <input type="text" name="title" required />
                    </div>
                    <div className="formgroup">
                        <label>Description:</label>
                        <input type="text" name="description" />
                    </div>
                    <div>
                        <label htmlFor="assignedTo">hvem er på opgaven:</label>
                        <input type="text" name="userName" id="assignedTo" defaultValue={username} list="users" required />
                        <datalist id="users">
                            {users.map(user => (
                                <option key={user.id} value={user.name} />
                            ))}
                        </datalist>
                        <input type="hidden" name="userId" value={users.find(user => user.name === username)?.id} />
                    </div>
                    <div>
                        <label>Estimeret timer for opgaven:</label>
                        <input
                            type="number"
                            name="estimate"
                            min="1"
                            step="0.5"
                            placeholder="f.eks. 4,5"
                            required
                        />
                    </div>

                    <button type="submit">Oprat opgaven</button>
                </Form>

            </dialog>
        </div>
    );
}
