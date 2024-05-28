/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const EmailVerified = () => {
    const [response,setResponse] = useState('')
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')


    const handleRequest = async () => {
        try {
            const response = await axios.post('http://192.168.5.239:8000/api/email-verified', {
                token,
                email
            });

            setResponse(response.data.success)

        } catch (error) {
            console.log(error);

        }
    };


    useEffect(() => {
        handleRequest()
    },[]);




    return (
        <main className="flex min-h-screen flex-col">
            {response ? <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-10">
                <h1 className='text-xl text-purple-500 py-4'>Your Email is Verified</h1>
                 <Link href="http://localhost:3000/admin/login">Login Your Account</Link>
            </div> : ""}
            
        </main>
    );
};

export default EmailVerified;