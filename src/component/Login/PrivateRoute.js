import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
    const { user, loading } = useAuth();
    if (loading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;