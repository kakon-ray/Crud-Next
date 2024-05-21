"use server"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';
import SocialLoginAction from './SocialLoginAction';
import EmailLogin from './EmailLogin';

const page = () => {



    return (

        <main className="flex min-h-screen flex-col">

            <ToastContainer />
            <div className="w-full max-w-xs mx-auto mt-20">
               
               <EmailLogin></EmailLogin>

                <SocialLoginAction/>

            </div>

        </main>
    );
};

export default page;