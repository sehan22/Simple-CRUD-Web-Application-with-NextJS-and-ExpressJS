'use client'

import React, {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";
import {FaBell, FaRegUserCircle, FaSearch, FaUserCircle} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import Image from "next/image";
import {IoDocumentTextOutline, IoMenu} from "react-icons/io5";
import {Divider, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {CiCoinInsert, CiMenuKebab} from "react-icons/ci";
import SideBar from "@/app/ui/dashboard/sidebar/sidebar";
import {IoIosWarning} from "react-icons/io";
import {TbCoinFilled} from "react-icons/tb";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("isOpen", isOpen.toString());
    }, [isOpen])


    function toggleNavbar() {
        setIsOpen(prevState => !prevState);
    }

    const path = usePathname();

    return (
        <div
            className={`flex justify-between items-center px-10 gap-5 py-5 bg-white shadow-lg shadow-gray-200 font-nunito`}>

            <div
                className="sm:hidden w-[40px] h-[40px] transition-all rounded-full hover:border-[3px] hover:border-Primary hover:border-opacity-20 hover:bg-Primary hover:bg-opacity-10 flex justify-center items-center"
                onClick={() => {
                    toggleNavbar();
                }}
            >
                <IoMenu className="text-[19px] text-Primary"/>
            </div>

            <div className="hidden sm:block relative flex-1 max-w-[400px]">
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

                    <Popover placement="bottom">
                        <PopoverTrigger>
                            <Button>
                                <FaSearch
                                    className="sm:hidden text-[16px] text-gray-300 hover:text-gray-400 transition-all"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div
                                className="flex flex-col gap-5 p-5 ms-5 min-w-[200px] bg-white rounded-xl font-nunito" style={{boxShadow: '0 0px 24px rgba(0, 0, 0, 0.08)'}}>
                                <div className="relative flex-1 max-w-[400px]">
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
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Popover placement="bottom-end">
                        <PopoverTrigger>
                            <Button>
                                <FaBell className="text-[16px] text-gray-300 hover:text-gray-400 transition-all"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex flex-col ms-5 w-[280px] bg-white shadow-xl rounded-xl font-nunito">
                                <div className="w-full bg-Primary rounded-t p-3">
                                    <h1 className="uppercase text-smaller font-bold text-Light">Message Center</h1>
                                </div>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-2 bg-Success rounded-full">
                                        <IoDocumentTextOutline className="text-Light text-[23px]"/>
                                    </div>

                                    <div className="flex-1 w-full">
                                        <h1 className="text-smaller text-Dark">December 12, 2019</h1>
                                        <h1 className="text-small text-black font-bold text-opacity-70">
                                            A new monthly report is ready to download!
                                        </h1>

                                    </div>
                                </div>

                                <Divider/>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-2 bg-Primary rounded-full">
                                        <TbCoinFilled className="text-Light text-[23px]"/>
                                    </div>

                                    <div className="flex-1 w-full">
                                        <h1 className="text-smaller text-Dark">December 7, 2019</h1>
                                        <h1 className="text-small text-black font-bold text-opacity-70">
                                            $290.29 has been deposited into your account!
                                        </h1>

                                    </div>
                                </div>

                                <Divider/>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-2 bg-Warning rounded-full">
                                        <IoIosWarning className="text-Light text-[23px]"/>
                                    </div>

                                    <div className="flex-1 w-full">
                                        <h1 className="text-smaller text-Dark">December 2, 2019</h1>
                                        <h1 className="text-small text-black font-bold text-opacity-70">
                                            Spending Alert: We have noticed unusually high spending for your account.
                                        </h1>

                                    </div>
                                </div>

                                <Divider/>


                                <div className="flex justify-center items-center w-full p-3">
                                    <h1 className="text-smaller text-Dark">Show All Alerts</h1>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>

                    <Popover placement="bottom-end">
                        <PopoverTrigger>
                            <Button>
                                <HiMail className="text-[19px] text-gray-300 hover:text-gray-400 transition-all"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="flex flex-col ms-5 w-[280px] bg-white shadow-xl rounded-xl font-nunito">
                                <div className="w-full bg-Primary rounded-t p-3">
                                    <h1 className="uppercase text-smaller font-bold text-Light">Message Center</h1>
                                </div>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-1 bg-Success rounded-full">
                                        <FaUserCircle className="text-Light text-[25px]"/>
                                    </div>

                                    <div className="flex-1 w-full overflow-hidden">
                                        <h1 className="text-small text-black font-bold text-opacity-70 overflow-hidden overflow-ellipsis whitespace-nowrap">Hi
                                            there! I am wondering if you can help me with a
                                            problem I have been having.</h1>
                                        <h1 className="text-smaller text-Dark">Emily Fowler · 58m</h1>
                                    </div>
                                </div>

                                <Divider/>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-1 bg-Primary rounded-full">
                                        <FaUserCircle className="text-Light text-[25px]"/>
                                    </div>

                                    <div className="flex-1 w-full overflow-hidden">
                                        <h1 className="text-small text-black font-bold text-opacity-70 overflow-hidden overflow-ellipsis whitespace-nowrap">Hi
                                            there! I am wondering if you can help me with a
                                            problem I have been having.</h1>
                                        <h1 className="text-smaller text-Dark">Emily Fowler · 58m</h1>
                                    </div>
                                </div>

                                <Divider/>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-1 bg-Warning rounded-full">
                                        <FaUserCircle className="text-Light text-[25px]"/>
                                    </div>

                                    <div className="flex-1 w-full overflow-hidden">
                                        <h1 className="text-small text-black font-bold text-opacity-70 overflow-hidden overflow-ellipsis whitespace-nowrap">Hi
                                            there! I am wondering if you can help me with a
                                            problem I have been having.</h1>
                                        <h1 className="text-smaller text-Dark">Emily Fowler · 58m</h1>
                                    </div>
                                </div>

                                <Divider/>

                                <div className="flex justify-start items-center w-full gap-2 p-3">
                                    <div className="p-1 bg-Danger rounded-full">
                                        <FaUserCircle className="text-Light text-[25px]"/>
                                    </div>

                                    <div className="flex-1 w-full overflow-hidden">
                                        <h1 className="text-small text-black font-bold text-opacity-70 overflow-hidden overflow-ellipsis whitespace-nowrap">Hi
                                            there! I am wondering if you can help me with a
                                            problem I have been having.</h1>
                                        <h1 className="text-smaller text-Dark">Emily Fowler · 58m</h1>
                                    </div>
                                </div>

                                <Divider/>


                                <div className="flex justify-center items-center w-full p-3">
                                    <h1 className="text-smaller text-Dark">Read More Messages</h1>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>


                </div>

                <hr/>

                <div className="flex items-center justify-center gap-3">
                    <h1 className="hidden lg:block text-normal text-Dark">Sehan Ranaweera</h1>

                    <FaUserCircle className="text-[25px] text-Dark"/>
                </div>

                {/*root name*/}
                <p className="hidden">{path.split("/").pop()?.toUpperCase()}</p>
            </div>
        </div>
    );
}

export default Navbar;
