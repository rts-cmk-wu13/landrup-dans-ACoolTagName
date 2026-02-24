import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
/*-----PAGES-----*/
import Home from "./pages/Home"
import List from "./pages/List";
import Detail from "./pages/Detail";
import Activities from "./pages/Activities";
import Activity from "./pages/Activity";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
/*-----PAGES-----*/
/*-----UTILITIES-----*/
import { getUser, getUsers } from "./uitlities/typicode";
import { getActivity, getActivities } from "./uitlities/Activities";
import { handleSubmit } from "./uitlities/actions";
/*-----UTILITIES-----*/
/*-----COMPONENTS-----*/
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/Error";
import RequireAuth from "./components/RequireAuth";
import Contact from "./components/Contact";
/*-----COMPONENTS-----*/
/* fra time sage*/
import { createBrowserRouter } from "react-router";
import RequireAuth from "./components/RequireAuth";
import { loginAction } from "./actions/loginAction";
import { customerAction } from "./actions/customerAction";
import { projectAction } from "./actions/projectAction";
import { taskAction } from "./actions/taskAction";
import { customersLoader, singleCustomerLoader } from "./loaders/customerLoader";
import { projectsLoader, singleProjectLoader } from "./loaders/projectLoader";
import { tasksLoader, singleTaskLoader } from "./loaders/taskLoader";
import { usersLoader, singleUserLoader } from "./loaders/userLoader";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Kunder from "./pages/Kunder";
import Sager from "./pages/Sager";
import KundeDetalier from "./pages/KundeDetalier";
import SagDetalier from "./pages/SagDetalier";
import OpgaveDetalier from "./pages/OpgaveDetalier";
import Brugere from "./pages/Brugere";
import BrugerDetalier from "./pages/BrugerDetalier";
import { logoutAction } from "./actions/loginAction";

/* fra time sage*/
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
                action: loginAction
            },
            {
                path: "list",
                element: (
                    <RequireAuth>
                        <List />
                    </RequireAuth>
                ),
                loader: getUsers
            },
            {
                path: "List/:id",
                element: (
                    <RequireAuth>
                        <Detail />
                    </RequireAuth>),
                loader: getUser
            },
            {
                path: "Activities",
                element: (
                    <RequireAuth>
                        <Activities />
                    </RequireAuth>
                ),
                loader: getActivities
            },
            {
                path: "Activities/:id",
                element: (
                    <RequireAuth>
                        <Activity />
                    </RequireAuth>),
                loader: getActivity
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]

    }

]);

export default router