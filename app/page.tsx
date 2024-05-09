
import { cookies } from 'next/headers';
import React from 'react';
import Navbar from './compoenet/Navbar';

const page = () => {
  
  const cookie = cookies().get("Authorization");
  console.log(cookie);


  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>

      
    </main>
  );
};

export default page;