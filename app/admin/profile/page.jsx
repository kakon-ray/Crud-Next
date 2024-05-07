/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../compoenet/Navbar';

const page = () => {

    const [user, setUser] = useState([]);

    let token = localStorage.getItem('auth');
    var myobj = JSON.parse(token);
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

    console.log(user)

    return (
        <main className="flex min-h-screen flex-col">
        <Navbar/>
        <hr />
            <h1>This is User Profile Page</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>


        </main>
    );
};

export default page;