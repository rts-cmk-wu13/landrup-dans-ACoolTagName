import { useLoaderData, Link, Form, useSearchParams } from "react-router";


export default function Tider() {
    const timeentries = useLoaderData();
    const [searchParams] = useSearchParams();
    const loginModalOpen = searchParams.get("create") === "true";

    if (loginModalOpen) {
        setTimeout(() => {
            document.querySelector(".timeentry__dialog").showModal();
        }, 100);
    }

    console.log("Loaded TimeEntrys:", timeentries);

    return (
        <div className="timeentry">
            <div>
                <h1 className="text-4xl font-bold">tider</h1>
                <Link to="?create=true" className="timeentry__button">Oprat ny tide</Link>
                <p className="mt-4">Oversigt over tider</p>
                <ul>
                    {timeentries.map(timeentry => (
                        <li key={timeentry.id}><Link to={`/tider/${timeentry.id}`} className="timeentry__button">{timeentry.company}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
