import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function AdminRoute({ children, ...rest }) {
    const { user, loading, isAdmin } = useAuth();
    if (loading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;