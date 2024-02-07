'use client'

import SideBar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import {FaAngleLeft} from "react-icons/fa";
import {useState} from "react";

export default function Layout({children,}: Readonly<{ children: React.ReactNode; }>) {

    // const [isClick, setIsClick] = useState(localStorage.getItem("isClick"));


    return (
        <div className="flex">

            <div className="bg-gradient-to-b z-10 from-blue-500 to-blue-700 shadow-xl">
                <SideBar/>
            </div>

            <div className="bg-Light flex-1">
                <Navbar/>
                {children}
            </div>

        </div>
    );
}
