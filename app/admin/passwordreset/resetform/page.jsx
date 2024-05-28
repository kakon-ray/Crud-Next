"use client"
import axios from 'axios';
import React from 'react';
import { useRouter,useSearchParams  } from 'next/navigation';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const token = searchParams.get('token')

    const notify = (value) => toast(value);

    
    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await axios.post('http://192.168.5.239:8000/api/new-password', {
                'email':event.target.email.value,
                'password':event.target.password.value,
                'confirm_password':event.target.confirm_password.value,
                'token':token
            },);
            
             if(response.data.success){
                router.push('/admin/login')
             }else{
                notify('Alreday Reset Password')
             }

          } catch (error) {
            notify(error.error)
            
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

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                               Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name='password' placeholder="Password" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" >
                              Confirm Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name='confirm_password' placeholder="Password" />
                        </div>


                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign up
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;