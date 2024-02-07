'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import {FaBell, FaSearch} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import Image from "next/image";

function Navbar() {
    const path = usePathname();

    return (
        <div className="flex justify-between items-center px-5 py-5 bg-white shadow-lg shadow-gray-200 font-nunito">

            <div className="relative w-[400px]">
                <input
                    type="text"
                    placeholder="Search for.."
                    className="px-4 py-2 placeholder:text-normal text-normal w-full bg-Light rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-500 text-white rounded-r-lg focus:outline-none">
                    <FaSearch/>
                </button>
            </div>

            <div className="flex justify-between items-center gap-2">
                <div className="flex justify-center items-center gap-3">
                    <FaBell className="text-[16px] text-gray-300 hover:text-gray-400 transition-all" />
                    <HiMail className="text-[19px] text-gray-300 hover:text-gray-400 transition-all" />
                </div>

                <hr/>

                <div className="flex items-center justify-center gap-3">
                    <h1 className="">Douglas McGee</h1>
                    <Image
                        src="/4.png"
                        width={32}
                        height={32}
                        alt="Picture of the author"
                        className="bg-gray-400 rounded-full"
                    />
                </div>
            </div>

            <p>{path.split("/").pop()?.toUpperCase()}</p>
        </div>
    );
}

export default Navbar;