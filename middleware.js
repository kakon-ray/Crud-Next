"use client";
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
// This function can be marked `async` if using `await` inside
export function middleware(request) {


 const cookie = cookies().get("Authorization");


    const logdInUserNotAccessPaths = 
    request.nextUrl.pathname === '/admin/login' || 
    request.nextUrl.pathname === '/admin/signup';

    if(logdInUserNotAccessPaths){
        if(cookie?.value){
           return NextResponse.redirect(new URL("/admin/profile",request.url))
        }
    }else{
      if(!cookie?.value){
        return NextResponse.redirect(new URL("/admin/login",request.url))
      }
    }

//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/admin/login",
    "/admin/signup",
    "/admin/profile",
  ],
}