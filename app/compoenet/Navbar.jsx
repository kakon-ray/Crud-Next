import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <ul class="flex bg-teal-400 text-white">
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/">Home</Link>
                 </li>
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/signup">Signup</Link>
                </li>
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/login">Login</Link>
                </li>
                <li class="mr-6 hover:bg-teal-500 p-4 hover:p-4">
                        <Link class="text-white" href="/admin/profile">Profile</Link>
                </li>
            </ul>


        </>
    );
};

export default Navbar;