"use client";

import Link from "next/link";
import { useUserAuth } from "../../_utils/auth-context";



export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // console.log(user);
    
    async function signOut() {
        await firebaseSignOut();
    }

    async function signIn() {
        await gitHubSignIn();
    }

    return(
        <div>
            {user ? 
            <div>
                <p>You are logged in</p>
                <button onClick={signOut} className="bg-gray-200 border rounded p-1 hover:bg-gray-300">Sign out</button>
                <div className="mt-2">
                    <Link className="bg-gray-200 border rounded p-1 hover:bg-gray-300" href="/week-10/shopping-list">Shopping List</Link>
                </div>
                <p>Welcome {user.displayName}, your email is {user.email}</p>
                <img className="rounded-full" src={user.photoURL} />
            </div>
            :
            <div>
                <p>You are not logged in</p>
                <button onClick={signIn} className="bg-gray-200 border rounded p-1 hover:bg-gray-300">Sign in</button>
            </div>
            }
        </div>
        

    )
}