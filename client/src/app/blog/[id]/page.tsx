import React from 'react';
import Link from "next/link";

type Repository = {
    id: string;
    name: string;
    full_Name: string;
};

export default function Blog(
    {params}: { params: { id: string } }
)


{
    return (
        <div>
            <div className="flex justify-center items-center mx-auto h-screen w-screen">
                <Link href="/about"><h1>Profile {params.id}</h1></Link>
            </div>
        </div>
    );
}
