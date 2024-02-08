'use client'

import React, {useEffect, useState} from 'react';
import {usePathname} from "next/navigation";
import {FaBell, FaRegUserCircle, FaSearch, FaUserCircle} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import Image from "next/image";
import {IoMenu} from "react-icons/io5";
import {Divider, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {CiMenuKebab} from "react-icons/ci";

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
                                className="flex flex-col gap-5 p-5 ms-5 min-w-[200px] bg-white shadow-xl rounded-xl font-nunito">
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
                            <div
                                className="flex flex-col gap-5 p-5 ms-5 min-w-[200px] bg-white shadow-xl rounded-xl font-nunito">

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
                            <div
                                className="flex flex-col gap-5 ms-5 min-w-[280px] bg-white shadow-xl rounded-xl font-nunito">
                                <div className="w-full bg-Primary rounded-t">
                                    <h1>Alert Center</h1>
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
