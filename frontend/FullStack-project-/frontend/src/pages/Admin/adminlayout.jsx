import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <>
            <h1>Admin Layout</h1>
            <Link to="/Admin/dashboard">Dashboard</Link>
            <Link to="/Admin/userdetails">UserDetails</Link>
            <Link to="/Admin/settings">Settings</Link>

            <Outlet/>
        </>
    );
}

export default AdminLayout;