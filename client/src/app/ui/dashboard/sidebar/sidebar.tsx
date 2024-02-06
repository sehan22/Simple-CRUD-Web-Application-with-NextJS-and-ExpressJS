import React from 'react';
import {
    MdAttachMoney,
    MdDashboard,
    MdShoppingBag,
    MdSupervisedUserCircle,
} from "react-icons/md";

import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menuLink";

interface MenuItems {
    title: string;
    path: string;
    icon: JSX.Element;
}

interface MenuLinkProps {
    data: MenuItems;
}

const menuItems: MenuItems[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard/>,
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle/>,
    },
    {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag/>,
    },
    {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney/>,
    },
];

export default function SideBar(props: MenuItems) {

    return (
        <div className="min-h-screen p-5">
            <p>Side Bar</p>

            <ul>
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <MenuLink data={menuItem}/>
                    </li>
                ))}
            </ul>


        </div>
    );
}
