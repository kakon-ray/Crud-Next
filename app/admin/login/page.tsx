"use client";

import Navbar from '../../compoenet/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormState } from 'react-dom';
import loginAction from './LoginAction';

const page = () => {

    const [error,formAction]= useFormState(loginAction,undefined);
    


    return (
  
        <main className="flex min-h-screen flex-col">
    
        <ToastContainer />
        <div className="w-full max-w-xs mx-auto mt-20">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={formAction}>

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
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign up
                            </button>

                        </div>
                    </form>
        </div>
         
        </main>
    );
};

export default page;