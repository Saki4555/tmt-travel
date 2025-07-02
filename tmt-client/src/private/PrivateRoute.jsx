
import DataLoading from '../components/shared/DataLoading';


import { Navigate,  useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {

    const { user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <div className='mt-36'>
        
        <DataLoading />
    </div>
    if(user) return children;
    return <Navigate to='/login' state={{from: location } } replace />
};

export default PrivateRoute;