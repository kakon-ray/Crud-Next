/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import 'react-toastify/dist/ReactToastify.css';

import { useCookies } from 'next-client-cookies';
import axios from 'axios';

const page = () => {

  const [product, setProduct] = useState([]);

  const cookies = useCookies();



  useEffect(() => {
    // const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // const res = await data.json();
    // setninja(res);
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:8000/api/product`, { headers: { "Authorization": `Bearer ${cookies.get('mytoken')}` } });

      setProduct(result.data.product);
    };

    fetchData();

  }, []);


  console.log(product)
  return (
    <main className="flex min-h-screen flex-col mt-5">

      <div className="grid grid-cols-4">
        {
          product.map(item => {
            return (
              <div key={item.id} className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <h2>{item.product_name}</h2>
                    <h2>{item.product_number}</h2>
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