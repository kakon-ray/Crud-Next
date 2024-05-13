/* eslint-disable @next/next/no-img-element */
"use client";
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'next-client-cookies';
import axios from 'axios';
import {ProductContext} from "./context/ProductContext";

const page = () => {

  let [product, setProduct] = useContext(ProductContext);
 
  console.log(product)

  return (
    <main className="flex min-h-screen flex-col mt-5">

      <div className="grid grid-cols-4">
        {
          product?.map(item => {
            return (
              <div key={item.id} className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <h2>{item.name}</h2>
                    <h6>{item.number}</h6>
                  </div>
                  <p className="text-gray-700 text-base">
                    {item.desc}
                  </p>
                </div>

              </div>
            )
          })
        }
      </div>

    </main>
  );
};

export default page;