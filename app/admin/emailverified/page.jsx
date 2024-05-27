"use client"
import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const EmailVerified = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')


    const handleDelete = async () => {

        try {
            const response = await axios.post('http://192.168.5.239:8000/api/email-verified', {
                token,
                email
            });

            console.log(response);

        } catch (error) {
            console.log(error);

        }



    };


    useEffect(() => {

        handleDelete()

    }, []);



    return (
        <main className="flex min-h-screen flex-col">
            <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-10">
                <h1 className='text-xl text-purple-500 py-4'>Your Email is Verified</h1>
                 <Link href="http://localhost:3000/admin/login">Login Your Account</Link>
            </div>
        </main>
    );
};

export default EmailVerified;