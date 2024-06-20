"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useCookies } from 'next-client-cookies';

const Navbar = () => {

        const cookies = useCookies();

        useEffect(()=>{
                const storedUserData_cookie = JSON.parse(localStorage.getItem("userData"));
                cookies.set('token', storedUserData_cookie?.token)
        },[])



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