"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Navbar from '../../compoenet/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const page = () => {

    const [items, setItems] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useRouter();


    const notify = (msg) => toast(msg);

    

    // Function to handle form submission
    const onSubmit = async (data) => {
        try {
            const postValue = await axios({
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                },
                url: "http://127.0.0.1:8000/api/user_login",
                data: data,
            });

            localStorage.setItem('auth', JSON.stringify(postValue.data));
            if(postValue.data.error){
                notify(postValue.data.error)
            }
            else if(postValue.data.message){
                notify(postValue.data.message)
                setTimeout(() => {
                    push('/admin/profile');
                  }, "1000");
                
            }
            else{
                notify('Server Error')
            }

            console.log(postValue.data)

        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };


    return (
  
        <main className="flex min-h-screen flex-col">
        <Navbar/>
        <ToastContainer />
        <div class="w-full max-w-xs mx-auto mt-20">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                               Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" {...register('email', { required: true })} placeholder="Eamil" />
                        </div>

                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register('password', { required: true })} placeholder="********" />

                        </div>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign up
                            </button>

                        </div>
                    </form>
                </div>
         
        </main>
    );
};

export default page;