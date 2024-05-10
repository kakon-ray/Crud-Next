"use server";
import { cookies } from "next/headers";


export default async function LogoutAction(){

     cookies().delete('Authorization');
   
}