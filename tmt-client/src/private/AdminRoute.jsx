import { Children } from "react";
import DataLoading from "../components/shared/DataLoading";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import { Navigate, useLocation } from "react-router";


const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    const {data: userData = {}, isLoading} = useUserData();
    if(loading || isLoading) return <DataLoading /> 
    if(user && userData && userData.role === 'admin' && userData.status === 'active') return children;

    return <Navigate to='/login' state={{from: location}} replace />
};

export default AdminRoute;

