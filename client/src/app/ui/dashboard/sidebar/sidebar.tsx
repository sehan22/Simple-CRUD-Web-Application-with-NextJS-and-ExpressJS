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
                submenu: {
                    title: "Users Details:",
                    list: [
                        {
                            title: "User Form",
                            path: "/dashboard/users/userform"
                        },

                        {
                            title: "All Users",
                            path: "/dashboard/users/allusers"
                        },
                    ]
                }
            },
            {
                title: "Components",
                path: "/dashboard/components",
                icon: <FaGear className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
                submenu: {
                    title: "CUSTOM COMPONENTS:",
                    list: [
                        {
                            title: "Buttons",
                            path: "/dashboard/components/buttons"
                        },

                        {
                            title: "Cards",
                            path: "/dashboard/components/cards"
                        },
                    ]
                }
            },
            {
                title: "Utilities",
                path: "/dashboard/utilities",
                icon: <FaWrench className="text-gray-200 hover:text-white transition-all text-[18px]"/>,
                submenu: {
                    title: "Custom Utilities:",
                    list: [
                        {
                            title: "Colours",
                            path: "/dashboard/utilities/colours"
                        },

                        {
                            title: "Borders",
                            path: "/dashboard/utilities/borders"
                        },
                        {
                            title: "Animation",
                            path: "/dashboard/utilities/animations"
                        },
                        {
                            title: "Other",
                            path: "/dashboard/utilities/others"
                        },
                    ]
                }
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
                submenu: {
                    title: "LOGIN SCREENS:",
                    list: [
                        {
                            title: "Login",
                            path: "/dashboard/pages/login"
                        },

                        {
                            title: "Register",
                            path: "/dashboard/pages/register"
                        },
                        {
                            title: "Forgot Password",
                            path: "/dashboard/pages/forgotpassword"
                        },
                        {
                            title: "404 Page",
                            path: "/dashboard/pages/404notfound"
                        },
                        {
                            title: "Blank Page",
                            path: "/dashboard/pages/blankpage"
                        },
                    ]
                }
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

interface ToggleNavBarProps {
    isButtonClick: boolean;
}

export default function SideBar({ isButtonClick } : ToggleNavBarProps) {

    const [isOpen, setIsOpen] = useState(false);
    /*const [isNavBarButtonClick, setIsNavBarButtonClick] = useState(localStorage.getItem('isOpen'));*/

    function toggleSidebar() {
        setIsOpen(prevState => !prevState);
    }

    return (
        /*${localStorage.getItem("isOpen") === "true" ? 'hidden' : '' }*/
        /*${localStorage.getItem('isOpen') === 'true' ? 'hidden' : 'block' }*/
        <div
            className={`hidden sm:flex transition-all duration-300 ${isOpen ? 'w-[105px]' : 'w-[225px]'} flex-col justify-start items-start min-h-screen p-5 font-nunito`}>

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

            <div className="hidden sm:flex justify-center w-full mt-5">
                <div
                    className="flex cursor-pointer hover:shadow-sm transition-all justify-center items-center p-3 rounded-full bg-white bg-opacity-5 hover:bg-opacity-10"
                    onClick={toggleSidebar}
                >
                    <FaAngleLeft
                        className={`text-[20px] transition-all duration-500 ease-in text-gray-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}/>
                </div>
            </div>
        </div>
    );
}


