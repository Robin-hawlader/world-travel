import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Context/UseAuth';



const Login = () => {
    const { user, signInWithgoogle, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInWithgoogle()
            .then(result => {
                history.push(redirect_uri);
            }).catch((error) => {
                alert(error.message)
            })
    }
    return (
        <div className='text-center'>
            <h3 className='text-center my-4'><span className='border-bottom border-4 border-danger'>Please login with goooogle</span></h3>
            {user.email ?
                <Button variant='danger' onClick={logOut}>Logout</Button>
                :
                <Button variant='danger' onClick={handleGoogleLogin}>Google Sign in</Button>
            }
        </div>
    );
};

export default Login;