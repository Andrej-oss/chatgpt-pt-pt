'use client'
import Image from "next/image";
import {signIn} from "next-auth/react";

function Login(props) {
    return (
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center" >
            <Image src="https://links.papareact.com/2i6" height={300} width={300}  alt="Logo"/>
            <button
                onClick={() => signIn("google")}
                className="text-white font-bold text-3xl animate-pulse">
                Sign In to use ChatGPT
            </button>
        </div>
    );
}

export default Login;