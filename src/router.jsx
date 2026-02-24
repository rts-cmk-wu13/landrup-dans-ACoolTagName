import { createBrowserRouter } from "react-router";
import { loginAction } from "./actions/loginAction";
/*import { customerAction } from "./actions/customerAction";*/
import { projectAction } from "./actions/projectAction";
import { taskAction } from "./actions/taskAction";
/*import { customersLoader, singleCustomerLoader } from "./loaders/customerLoader";*/
import { projectsLoader, singleProjectLoader } from "./loaders/activityLoader";
/*import { tasksLoader, singleTaskLoader } from "./loaders/taskLoader";*/
import { usersLoader, singleUserLoader } from "./loaders/userLoader";
import Layout from "./components/Layout";
/*import Kunder from "./pages/Kunder";*/
import Sager from "./pages/ActivityList";
/*import KundeDetalier from "./pages/KundeDetalier";*/
import SagDetalier from "./pages/ActivityDetalier";
/*import OpgaveDetalier from "./pages/OpgaveDetalier";*/
/*import Brugere from "./pages/UsersList";*/
/*import BrugerDetalier from "./pages/UserDetalier";*/
import { logoutAction } from "./actions/loginAction";
import UserDetalier from "./pages/UserDetalier";
import UsersList from "./pages/UsersList";

/* transfterred */


/*-----PAGES-----*/
/*import Home from "./pages/Home"
import List from "./pages/List";
import Detail from "./pages/Detail";
import Activities from "./pages/Activities";
import Activity from "./pages/Activity";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";*/
/*-----PAGES-----*/
/*-----UTILITIES-----*/
import { getUser, getUsers } from "./uitlities/typicode";
import { getActivity, getActivities } from "./uitlities/Activities";
import { handleSubmit } from "./uitlities/contactActions";
/*-----UTILITIES-----*/
/*-----COMPONENTS-----*/
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/Error";
import RequireAuth from "../src test/components/RequireAuth";
import Activities from "./pages/ActivityList";
import ActivityDetalier from "./pages/ActivityDetalier";
/*import Contact from "./components/Contact";*/



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
            },/*
            {
                path: "/kunder",
                element: <RequireAuth><Kunder /></RequireAuth>,
                loader: customersLoader,
                action: customerAction
            },
            {
                path: "/kunder/:customerId",
                element: <RequireAuth><KundeDetalier /></RequireAuth>,
                loader: singleCustomerLoader,
                action: projectAction
            },*/
            {
                path: "/activities",
                element: <RequireAuth><Activities /></RequireAuth>,
                loader: projectsLoader,
                action: projectAction
            },
            {
                path: "/activities/:projectId",
                element: <RequireAuth><ActivityDetalier /></RequireAuth>,
                loader: singleProjectLoader,
                action: taskAction
            },/*
            {
                path: "/opgaver/:taskId",
                element: <RequireAuth><OpgaveDetalier /></RequireAuth>,
                loader: singleTaskLoader,
                action: taskAction
            },*/
            {
                path: "/usersList",
                element: <RequireAuth><UsersList /></RequireAuth>,
                loader: usersLoader
            },
            {
                path: "/usersList/:userId",
                element: <RequireAuth><UserDetalier /></RequireAuth>,
                loader: singleUserLoader
            },
            {
                path: "/logout",
                action: logoutAction
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router