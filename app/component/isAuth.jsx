"use client";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function IsAuth(Component) {
  return function IsAuthenticatedComponent(props) {
    const router = useRouter();

    const [userData, setUserData] = useState();
    const cookies = useCookies();

    useEffect(() => {
      // Retrieve user data from localStorage when component mounts
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      setUserData(storedUserData);
    }, []);

    useEffect(() => {
      // Check if user data exists in localStorage when component mounts
      const storedUserData = JSON.parse(localStorage.getItem("userData"));

      if (!storedUserData || !cookies.get('token')) {
        // If userData is not available, redirect to home page
        router.push("/admin/login");
      }
    }, [router]);

    // If userData is available, render the component
    if (userData || cookies.get('token')) {
      return <Component {...props} />;
    } else {
      // If userData is not available, render UserNotFound component
      return <></>;
    }
  };
}

export default IsAuth;
