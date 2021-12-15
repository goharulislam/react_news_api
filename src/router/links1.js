import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import Users from '../pages/Users.js';

export default [
    {
        path: "/",
        exact: true,
        component: () => <Home />,
    },
    {
        path: "/register",
        exact: true,
        component: () => <Register />,
    },
    {
        path: "/login",
        exact: true,
        component: () => <Login />,
    },
    {
        path: "/users",
        exact: true,
        component: () => <Users />,
    },
];