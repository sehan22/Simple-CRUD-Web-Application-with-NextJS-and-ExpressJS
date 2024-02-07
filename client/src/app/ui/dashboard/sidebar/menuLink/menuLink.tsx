import React from 'react';
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa";

interface MenuLinkProps {
    data: any;
    isClick: boolean;
}

export default function MenuLink({data, isClick}: MenuLinkProps) {
    return (
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
    );
}
