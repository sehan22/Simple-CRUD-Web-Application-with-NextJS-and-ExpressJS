import React from 'react';
import SideBar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";

export default function Layout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex">
            <div className="w-[225px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-e-lg shadow-xl">
                <SideBar/>
            </div>

            <div className="p-5 flex-1">
                <Navbar/>
                {children}
            </div>
        </div>
    );
}
