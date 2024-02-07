'use client'

import React, {useState} from 'react';
import {
    MdSupervisedUserCircle,
} from "react-icons/md";

import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menuLink";
import {IoIosSpeedometer} from "react-icons/io";
import {FaGear} from "react-icons/fa6";
import {FaAngleLeft, FaChartArea, FaWrench} from "react-icons/fa";
import {PiFolderSimpleFill} from "react-icons/pi";
import {RiTableFill} from "react-icons/ri";
import {BsFillEmojiLaughingFill} from "react-icons/bs";

interface MenuItem {
    title: string;
    list: any,
}

interface MenuLinkProps {
    data: MenuItem;
}

const menuItems: MenuItem[] = [
    {
        title: "DASHBOARD",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard/",
                icon: <IoIosSpeedometer className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
        ],
    },

    {
        title: "PAGES",
        list: [
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle className="text-gray-200 hover:text-white transition-all text-[20px]"/>,
            },
            {
                title: "Components",
                path: "/dashboard/components",
                icon: <FaGear className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
            {
                title: "Utilities",
                path: "/dashboard/utilities",
                icon: <FaWrench className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
        ],
    },

    {
        title: "ADDONS",
        list: [
            {
                title: "Pages",
                path: "/dashboard/pages",
                icon: <PiFolderSimpleFill className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
            {
                title: "Charts",
                path: "/dashboard/charts",
                icon: <FaChartArea className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
            {
                title: "Tables",
                path: "/dashboard/tables",
                icon: <RiTableFill className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
            },
        ],
    },
];

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div
            className={`transition-all duration-300 flex ${isOpen ? 'w-[105px]' : 'w-[225px]'} flex-col justify-start items-start min-h-screen p-5 font-nunito`}>

            <div className="flex items-center justify-center w-full gap-3">

                <BsFillEmojiLaughingFill className="text-[25px] text-white"/>

                {
                    !isOpen
                        ? <div className="flex transition-all">
                            <h1 className={`text-white text-[20px] font-bold`}>SB ADMIN</h1>
                            <p className="text-small font-bold text-white">2</p>
                        </div>
                        : <></>
                }

            </div>


            <hr className="w-full border-t-[1px] border-gray-50 border-opacity-20 mt-5"/>

            <div className="flex flex-col justify-start items-start w-full gap-3">

                {menuItems.map((menuItem, index) => (
                    <div className="flex flex-col w-full" key={index}>
                        {
                            menuItem.title !== "DASHBOARD"
                                ?
                                <h1 className={`text-white ${isOpen ? 'text-center' : 'text-start'} opacity-40 text-small font-bold tracking-wider`}> {menuItem.title}</h1>
                                : console.log("DASHBOARD")
                        }

                        {menuItem.list.map((listItem: any) => (
                            <MenuLink key={menuItem.title} data={listItem} isClick={isOpen}/>
                        ))}
                        <hr className="w-full border-t-[1px] border-gray-50 border-opacity-20"/>
                    </div>
                ))}
            </div>

            <div className="flex justify-center w-full mt-5">
                <div
                    className="flex cursor-pointer hover:shadow-sm transition-all justify-center items-center p-3 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                    onClick={toggleSidebar}
                >
                    <FaAngleLeft className={`text-[20px] transition-all duration-500 ease-in text-gray-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
            </div>
        </div>
    );
}

