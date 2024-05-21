"use client"
import React from 'react';
import { useRouter,useSearchParams  } from 'next/navigation';

const getToken = () => {
    const searchParams = useSearchParams()

    const token = searchParams.get('token')
    
    return token;
};

export default getToken;