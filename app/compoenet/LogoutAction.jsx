"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutAction(){

     cookies().delete('Authorization');
      redirect('/admin/login')
   
}