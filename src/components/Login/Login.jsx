/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';
const Login = () => {
const [user, setUser] = useState(null)
    
    const auth = getAuth(app)
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn =() =>{
       signInWithPopup(auth,googleProvider)
       .then(result =>{
        const logedInUser= result.user;
        console.log(logedInUser);
        setUser(logedInUser)
       })
       .catch(error => {
            console.log('error', error.message)
           })
    }

    const handleGithubSignIn=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            const logedInUser =result.user;
            console.log(logedInUser)
            setUser(logedInUser)
        }).catch(error =>{
            console.log(error)
        })
     } 

    const handleSignOut=()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        });

    }
    return (
        <div>
            {/* user? logout : sign in */}
           {user? <button onClick={handleSignOut}>Sign Out</button>:
           <div>
           <button onClick={handleGoogleSignIn}>Google Login</button>
           <button onClick={handleGithubSignIn} >Github Login</button>
           </div>
              }
            { user && <div>
                <h3>User:{user.displayName}</h3>
                <p>Mail: {user.email}</p>
                </div>
                }
        </div>
        
    );
};

export default Login;