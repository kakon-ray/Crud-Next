"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import LogoutAction from './LogoutAction';
import { useCookies } from 'next-client-cookies';

const Navbar = ({mytoken}) => {

        const [error,formAction]= useFormState(LogoutAction,undefined);

        const cookies = useCookies();

        useEffect(()=>{
                cookies.set('mytoken', mytoken)

        },[mytoken])

   

    return (
        <>
            <ul class="flex bg-teal-400 text-white">
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/">Home</Link>
                 </li>
                
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/signup">Signup</Link>
                </li>

                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/login">Login</Link>
                </li>

                {/* {!mytoken ? ( <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/login">Login</Link>
                </li>) : <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                       <form action={formAction}>
                          <input type="text" style={{display:"none"}} />
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Logout
                            </button>
                       </form>
                </li>} */}

               
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/profile">Profile</Link>
                </li>
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/product">Manage Product</Link>
                </li>
            </ul>


        </>
    );
};

export default Navbar;