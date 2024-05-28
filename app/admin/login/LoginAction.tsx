"use server";
import axios from "axios";
import { promises } from "dns";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { json } from "stream/consumers";

export default async function LoginAction(
    currentState:any,
    formData:FormData
): Promise<string> {


    const email = formData.get('email');
    const password = formData.get('password');


    const postValue = await axios({
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        url: "http://192.168.5.239:8000/api/user_login",
        data: JSON.stringify({email,password}),
    });

    if(postValue.data.error){
        console.log(postValue.data.error)
    }
    else if(postValue.data.message){
        cookies().set("Authorization",postValue.data.token,{
            secure:true,
            httpOnly:true,
            expires:Date.now() * 24 * 60 * 1000 * 3,
            path:'/',
            sameSite:"strict",
    
         })

         redirect('/admin/profile')
     
        
    }
    

   
}