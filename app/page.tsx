
import { cookies } from 'next/headers';
import React from 'react';
import Navbar from './compoenet/Navbar';

const page = () => {
  const mytoken = cookies().get("Authorization");

  console.log(mytoken);
  return (
    <main className="flex min-h-screen flex-col">

      
    </main>
  );
};

export default page;