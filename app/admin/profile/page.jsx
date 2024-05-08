/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../compoenet/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {

    const [user, setUser] = useState([]);
    const { push } = useRouter();
    
    var myobj = JSON.parse(localStorage.getItem('auth'));
    var mytoken = myobj.token;


    useEffect(() => {
        // const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        // const res = await data.json();
        // setninja(res);
        const fetchData = async () => {
            const result = await axios(`http://127.0.0.1:8000/api/me`, { headers: { "Authorization": `Bearer ${mytoken}` } });

            setUser(result.data);
        };

        fetchData();

    }, []);


    const notify = (msg) => toast(msg);

    const logOut = async () => {
        try {
            const postValue = await axios({
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    "Authorization": `Bearer ${mytoken}`
                },
                url: "http://127.0.0.1:8000/api/logout",
            });

            localStorage.setItem('auth', JSON.stringify(postValue.data));
            if(postValue.data.error){
                notify(postValue.data.error)
            }
            else if(postValue.data.message){
                notify(postValue.data.message)
                setTimeout(() => {
                    push('/admin/login');
                  }, "1000");
                
            }
            else{
                notify('Login Faild')
            }

            console.log(postValue.data)

        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    console.log(user)

    return (
        <main className="flex min-h-screen flex-col">
        <Navbar/>
        <ToastContainer />
  
<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src={user.image} alt="John Doe"/>
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
            <button class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" onClick={logOut}>Logout</button>
            </div>

        </div>
    </div>
</div>

</div>

        </main>
    );
};

export default page;