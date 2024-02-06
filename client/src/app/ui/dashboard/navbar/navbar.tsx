'use client'

import React from 'react';
import {usePathname} from "next/navigation";

function Navbar() {
    const path = usePathname();

    return (
        <div className="flex ">
            <p>{path.split("/").pop()}</p>
        </div>
    );
}

export default Navbar;
