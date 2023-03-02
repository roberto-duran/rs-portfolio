'use client';
import {FcGoogle} from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <>
            <h1 className="text-xl font-semibold text-center">
                Hi, Welcome Back
            </h1>
            {/* SSO Login */}
            <div className="flex flex-col space-y-3 text-gray-800">
                <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                        className="flex btn bg-gray-100 gap-6 hover:bg-gray-300
                    hover:text-gray-800">
                    <FcGoogle className="w-8 h-8 inline-block" />
                    <span className="w-30 flex-grow-2">Sign in with Google</span>
                </button>
            </div>
        </>
    );
};
