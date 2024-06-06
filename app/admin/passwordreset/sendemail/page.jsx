"use client"
import axios from 'axios';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

    const notify = (value) => toast(value);

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await axios.post('http://192.168.5.239:8000/api/reset_password', {
                'email':event.target.email.value,
            },);
            
              console.log(response.data.msg)
              if(response.data.msg){
                notify(response.data.msg)
              }else{
                notify('User Not Found')
              }

          } catch (error) {
            console.log(error);
            
          }
             
    
    };


    return (
        <div className='flex min-h-screen flex-col mt-5'>
           <ToastContainer />
            <div className='w-50 mx-auto'>
                <div className="card">
                
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <h1 className='pb-5 text-xl'>Send Your Email</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name='email' placeholder="Eamil" />
                        </div>

                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Send Email
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;