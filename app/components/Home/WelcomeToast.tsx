"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "../../../axios/axios";

interface User {
  id: number;
  username: string;
  email: string;
}

interface MeResponse {
  user: User;
}

export default function WelcomeToast() {
  const hasFetched = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (hasFetched.current) {
      return;
    }

    hasFetched.current = true;

    const getUser = async () => {
      try {
        const response = await api.get<MeResponse>("/auth/me");

        const user = response.data?.user;

        if (!user) {
          console.log("❌ No user found.");
          return;
        }

        if (!user.username) {
          console.log("❌ Username is empty.");
          return;
        }

        toast.success(`Welcome back, ${user.username}! 👋`, {
          toastId: "welcome-user",
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });

        console.log("✅ Welcome toast displayed");
      } catch (error: any) {
        const status = error?.response?.status;

        if (status === 401) {
          console.log("❌ Access token expired or invalid.");

          router.replace("/login");
          return;
        }

        console.error("❌ /auth/me failed:", error);
      }
    };

    getUser();
  }, [router]);

  return null;
}