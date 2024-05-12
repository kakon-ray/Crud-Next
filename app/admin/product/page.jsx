/* eslint-disable @next/next/no-img-element */
"use client";

import { ProductContext } from '@/app/context/ProductContext';
import Link from 'next/link';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const page = () => {

    let [product, setProduct] = useContext(ProductContext);

    return (
        <main className="flex min-h-screen flex-col">

            <ToastContainer />

            <h1 className='text-lg text-center py-11'>Manage Product</h1>

            <div class="container mx-auto">

                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4 text-center">
                            <th class="p-4 w-1/4">Image</th>
                            <th class="p-4 w-1/4">Product Name</th>
                            <th class="p-4 w-1/4">Action</th>
                        </tr>
                    </thead>

                    <tbody class="bg-grey-light w-full text-center" style={{ "height": "50vh" }}>
                        {
                            product.map(item => {
                                return (
                                    <tr key={item.id} class="flex w-full  text-center">
                                        <td class="p-4 w-1/4">Dogs</td>
                                        <td class="p-4 w-1/4">Cats</td>
                                        <td class="p-4 w-1/4">
                                            <Link href="/admin/product/add"
                                                class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >
                                                Update
                                            </Link>

                                            <button
                                                class="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                data-ripple-light="true"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>

        </main>
    );
};

export default page;