
import DataLoading from '../components/shared/DataLoading';


import { Navigate,  useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const { user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <DataLoading />
    if(user) return children;
    return <Navigate to='/login' state={{from: location } } replace />
};

export default PrivateRoute;