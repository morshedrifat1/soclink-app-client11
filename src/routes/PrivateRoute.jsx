import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation} from 'react-router';
import LoadingSpiner from '../components/LoadingSpiner';

const PrivateRoute = ({children}) => {
    const {user,loader} = use(AuthContext);
    const location = useLocation();
    if(loader){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(!user){
        return <Navigate to={'/auth/login'} state={location.pathname} replace></Navigate>
    }
    return children
};

export default PrivateRoute;