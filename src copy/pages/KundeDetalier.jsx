import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function KundeDetalier() {
    const customer = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".project__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Customer:", customer);

    return (
        <div className="customer">

            <h1 className="text-4xl font-bold" >{customer.company}</h1>
            <Link to="/kunder" className="customer__button">tilbage til oversigt</Link>
            <p className="mt-4">{customer.company}</p>
            <div>
                <p><span className="indicater">E-mail: </span>{customer.email}</p>
                <p><span className="indicater">Tlf nr: </span>{customer.phone}</p>
                <p><span className="indicater">Adresse1: </span>{customer.address1}</p>
                <p><span className="indicater">Adresse2: </span>{customer.address2}</p>
                <p><span className="indicater">Post number: </span>{customer.postalCode}</p>
                <p><span className="indicater">By: </span>{customer.city}</p>
                <p><span className="indicater">Kontact person: </span>{customer.contactperson}</p>
                <p><span className="indicater">Kontact email: </span>{customer.contactemail}</p>
                <p><span className="indicater">Sager: </span></p>
                <Link to="?create=true" className="project__button button">Opret ny sag</Link>
                <ul className="op_list">
                    {customer.projects.map(project => (
                        <li key={project.id}>{project.name} <Link to={`/sager/${project.id}`} className="project__button button button">Til sagen</Link></li>
                    ))}
                </ul>

            </div>
            <dialog className="project__dialog">
                <Form method="post">
                    <p>Oprat ny Sage</p>
                    <div className="formgroup">
                        <label>Kunde: {customer.company}</label>
                        <input type="hidden" name="customerId" value={customer.id} required />
                    </div>
                    <div className="formgroup">
                        <label>Navn:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="formgroup">
                        <label>Description:</label>
                        <input type="text" name="description" required />
                    </div>

                    <button type="submit">Oprat Sagen</button>
                </Form>
            </dialog>
        </div>
    );
}
