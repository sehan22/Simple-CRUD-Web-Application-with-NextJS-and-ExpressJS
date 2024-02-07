import React, {useState} from 'react';
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {Accordion, AccordionItem, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {log} from "node:util";

interface MenuLinkProps {
    data: any;
    isClick: boolean;
}

export default function MenuLink({data, isClick}: MenuLinkProps) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(prevState => !prevState);
    }

    return (
        /*                <Link href={data.path} className="flex justify-between items-center py-5">
                            <div
                                className={`flex ${isClick ? 'flex-col' : 'flex-row'} ${isClick ? 'justify-center' : 'justify-start'} w-full items-center gap-1`}>
                                {data.icon}
                                <h1 className={`text-gray-200 ${isClick ? 'text-small' : 'text-[10.5px]'}  hover:text-white font-nunito text-normal`}>{data.title}</h1>
                            </div>
                            {
                                !isClick
                                    ? (data.title === "Charts" || data.title === "Tables")
                                        ? (<></>)
                                        : (<FaAngleRight className="text-gray-200 hover:text-white"/>)
                                    : <></>
                            }
                        </Link>*/



        <>
            {
                (isClick)
                    ? <Popover placement="right">
                        <PopoverTrigger>
                            <Link href={data.path} className="flex justify-between items-center py-5">
                                <div
                                    className={`flex ${isClick ? 'flex-col' : 'flex-row'} ${isClick ? 'justify-center' : 'justify-start'} w-full items-center gap-1`}>
                                    {data.icon}
                                    <h1 className={`text-gray-200 ${isClick ? 'text-small' : 'text-[10.5px]'}  hover:text-white font-nunito text-normal`}>{data.title}</h1>
                                </div>
                                {
                                    !isClick
                                        ? (data.title === "Charts" || data.title === "Tables")
                                            ? (<></>)
                                            : (<FaAngleRight className="text-gray-200 hover:text-white"/>)
                                        : <></>
                                }
                            </Link>
                        </PopoverTrigger>
                        <PopoverContent>
                            {
                                data.submenu !== undefined
                                    ? <div
                                        className="flex flex-col gap-5 p-5 ms-5 min-w-[200px] bg-white shadow-xl rounded-xl">
                                        <h1 className="text-[10.5px] font-bold text-Secondary">{data.submenu.title}</h1>

                                        {
                                            data.submenu.list.map((subMenuItem: any) => (
                                                <Link href={subMenuItem.path} className="text-normal text-gray-800"
                                                      key={subMenuItem.title}>{subMenuItem.title}</Link>
                                            ))
                                        }
                                    </div>

                                    : <></>
                            }
                        </PopoverContent>
                    </Popover>


                    : <div className="flex flex-col transition-all">
                        <Link href={data.path} className="flex justify-between items-center py-5"
                              onClick={toggleSidebar}
                        >
                            <div
                                className={`flex ${isClick ? 'flex-col' : 'flex-row'} ${isClick ? 'justify-center' : 'justify-start'} w-full items-center gap-1`}>
                                {data.icon}
                                <h1 className={`text-gray-200 ${isClick ? 'text-small' : 'text-[10.5px]'}  hover:text-white font-nunito text-normal`}>{data.title}</h1>
                            </div>
                            {
                                !isClick
                                    ? (data.submenu !== undefined)
                                        ? (<FaAngleRight className="text-gray-200 hover:text-white"/>)
                                        : (<></>)
                                    : <></>
                            }
                        </Link>

                        {
                            isOpen
                                ? data.submenu !== undefined
                                    ? <div
                                        className="flex flex-col gap-5 p-5 w-full bg-white shadow-xl rounded-md">
                                        <h1 className="text-[10.5px] font-bold text-Secondary">{data.submenu.title}</h1>
                                        {
                                            data.submenu.list.map((subMenuItem: any) => (
                                                <Link href={subMenuItem.path} className="text-normal text-gray-800"
                                                      key={subMenuItem.title}>{subMenuItem.title}</Link>
                                            ))
                                        }
                                    </div>
                                    : <></>

                                : <></>
                        }
                    </div>
                /**/
            }
        </>
    );
}
