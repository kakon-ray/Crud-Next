/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormState } from 'react-dom';

import { useCookies } from 'next-client-cookies';
import { redirect } from "next/navigation";
import IsAuth from "../../component/isAuth";

const ProfilePage = () => {

    const [user, setUser] = useState([]);
    const router = useRouter();
    const cookies = useCookies();




    useEffect(() => {
        
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/me`, { headers: { "Authorization": `Bearer ${cookies.get('token')}` } });
    
            setUser(result.data);
        };

        fetchData();

    }, []);


    const notify = (msg) => toast(msg);

    const logOut = async () => {
        localStorage.removeItem("userData")
        cookies.remove('token')
        router.push("/admin/login");
    };




    return (
        <main className="flex min-h-screen flex-col">

            <ToastContainer />

            <div class="flex items-center h-screen w-full justify-center">

                <div class="max-w-xs">
                    <div class="bg-white shadow-xl rounded-lg py-3">

                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src={user.avatar} alt="John Doe" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.name}</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td class="px-2 py-2">+88 {user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td class="px-2 py-2">{user.email}</td>
                                    </tr>
                                </tbody></table>

                            <div class="text-center my-3">
                                    <button onClick={logOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Logout
                                    </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default IsAuth(ProfilePage);