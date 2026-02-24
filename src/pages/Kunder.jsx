import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function Kunder() {
    const customers = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".customer__dialog").showModal();
        }, 100);
    }

    console.log("Loaded Customers:", customers);

    return (
        <div className="customer">
            <div>
                <h1 className="text-4xl font-bold">Kunder</h1>
                <Link to="?create=true" className="customer__button button">Oprat ny kunde</Link>
                <p className="mt-4">Oversigt over kunder</p>
                <ul className="op_list">
                    {customers.map(customer => (
                        <li key={customer.id}><p>{customer.company} </p><Link to={`/kunder/${customer.id}`} className="customer__button button">Til kunden</Link></li>
                    ))}
                </ul>
            </div>
            <dialog className="customer__dialog">
                <Form method="post">
                    <p>Oprat ny kunde</p>
                    <div className="formgroup">
                        <label>Firma navn:</label>
                        <input type="text" name="company" required />
                    </div>
                    <div className="formgroup">
                        <label>E-mail:</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="formgroup">
                        <label>Tlf nr:</label>
                        <input type="number" name="phone" required />
                    </div>
                    <div className="formgroup">
                        <label>Adresse1:</label>
                        <input type="text" name="address1" required />
                    </div>
                    <div className="formgroup">
                        <label>Adresse2:</label>
                        <input type="text" name="address2" />
                    </div>
                    <div className="formgroup">
                        <label>Post number:</label>
                        <input type="number" name="postalCode" required />
                    </div>
                    <div className="formgroup">
                        <label>By:</label>
                        <input type="text" name="city" required />
                    </div>
                    <div className="formgroup">
                        <label>Kontact person:</label>
                        <input type="text" name="contactperson" />
                    </div>
                    <div className="formgroup">
                        <label>Kontakt enmail:</label>
                        <input type="email" name="contactemail" />
                    </div>

                    <button type="submit">Oprat kunden</button>
                </Form>
            </dialog>
        </div>
    );
}
