import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
/*-----PAGES-----*/
import Home from "./pages/Home"
import List from "./pages/List";
import Activities from "./pages/Activities";
import Detail from "./pages/Detail";
import Activity from "./pages/Activity";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
/*-----PAGES-----*/
/*-----UTILITIES-----*/
import { getUser, getUsers } from "./uitlities/typicode";
import { getActivity, getActivities } from "./uitlities/activities";
import { handleSubmit } from "./uitlities/actions";
/*-----UTILITIES-----*/
/*-----COMPONENTS-----*/
import Loading from "./components/Loading";
import { ErrorBoundary } from "./components/Error";
import RequireAuth from "./components/RequireAuth";
/*-----COMPONENTS-----*/


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
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