import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function Activity() {
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
                <Link to="?create=true" className="project__button button">Oprat ny Sag</Link>
                <p className="mt-4">Oversigt over Sager</p>
                <ul className="op_list">
                    {projects.map(project => (
                        <li key={project.id}>
                            <p>{project.name}, {project.customer.company} </p>
                            <Link to={`/sager/${project.id}`} className="project__button button">Til sagen</Link></li>
                    ))}
                </ul>
            </div>
            <dialog className="project__dialog">
                <Form method="post">
                    <p>Oprat ny Sage</p>
                    <div className="formgroup">
                        <label>kunde:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="formgroup">
                        <label>Navn:</label>
                        <input type="test" name="name" required />
                    </div>
                    <div className="formgroup">
                        <label>Beskrivelse:</label>
                        <input type="test" name="description" required />
                    </div>

                    <button type="submit">Oprat Sagen</button>
                </Form>
            </dialog>
        </div>
    );
}
