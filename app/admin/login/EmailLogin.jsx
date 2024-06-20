"use client"
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';

const EmailLogin = () => {

    const cookies = useCookies();
    const router = useRouter();

    // Email Login
    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email)

        const postValue = await axios({
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            url: "http://127.0.0.1:8000/api/user_login",
            data: JSON.stringify({ email, password }),
        });

        if (postValue.data.error) {
            console.log(postValue.data.error)
        }
        else if (postValue.data.message) {

            console.log( postValue.data.token)
            cookies.set('token', postValue.data.token)
            localStorage.setItem("userData",JSON.stringify( postValue.data));
            router.push("/admin/profile");

        }
   
    }


    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name='email' placeholder="Eamil" />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' placeholder="********" />

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                    </button>

                </div>
            </form>

            <div className='pt-4 text-center'>
                <Link href='/admin/passwordreset/sendemail' className='no-underline hover:underline'> Reset Your Password</Link>
            </div>

        </div>
    );
};

export default EmailLogin;