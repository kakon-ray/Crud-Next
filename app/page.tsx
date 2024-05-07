/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './compoenet/Navbar';

export default function Home() {

  const [product, setProduct] = useState([]);

  var myobj = JSON.parse(localStorage.getItem('auth'));
  var mytoken = myobj.token;



  useEffect(() => {
    // const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // const res = await data.json();
    // setninja(res);
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:8000/api/product`, { headers: { "Authorization": `Bearer ${mytoken}` } });

      setProduct(result.data.product)
    };

    fetchData();

  }, []);




  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-4 py-5">
        {product?.map((item) => {
          return (
          <React.Fragment key={item._id}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={item.product_img} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.product_number}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>

            </div>
          </React.Fragment>
        
          )
        })}
      </div>

    </main>
  );
}
