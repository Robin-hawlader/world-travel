import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Context/UseAuth';



const Login = () => {
    const { user, signInWithgoogle, logOut } = useAuth();
    return (
        <div>
            <h2>Please login with goooogle</h2>
            {user.email ?
                <Button onClick={logOut}>Logout</Button>
                :
                <Button onClick={signInWithgoogle}>Google Sign in</Button>
            }
        </div>
    );
};

export default Login;