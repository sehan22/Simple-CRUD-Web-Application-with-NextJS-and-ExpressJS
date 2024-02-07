import React from 'react';
import {FaCalendar, FaDownload} from "react-icons/fa";

export default function Dashboard() {
    return (

        <div className="px-10 flex-1 font-nunito">
            <div className="flex justify-between items-center py-5">
                <h1 className="text-Dark text-[25px]">Dashboard</h1>
                <button
                    type="button"
                    className="flex items-center justify-center text-normal gap-2 px-2 py-1 bg-Primary rounded shadow-md text-white"
                >
                    <FaDownload className="text-small"/>
                    Generate Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Primary rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Primary">Earnings (Monthly)</p>
                        <h1 className="font-bold text-[20px] text-Dark">$ 40,000</h1>
                    </div>

                    <FaCalendar className="text-[28px] text-[#dddfeb]"/>
                </div>

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Primary rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Primary">Earnings (Monthly)</p>
                        <h1 className="font-bold text-[20px] text-Dark">$ 40,000</h1>
                    </div>

                    <FaCalendar className="text-[28px] text-[#dddfeb]"/>
                </div>

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Primary rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Primary">Earnings (Monthly)</p>
                        <h1 className="font-bold text-[20px] text-Dark">$ 40,000</h1>
                    </div>

                    <FaCalendar className="text-[28px] text-[#dddfeb]"/>
                </div>

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Primary rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Primary">Earnings (Monthly)</p>
                        <h1 className="font-bold text-[20px] text-Dark">$ 40,000</h1>
                    </div>

                    <FaCalendar className="text-[28px] text-[#dddfeb]"/>
                </div>

                {/*                <div className="rounded shadow-sm bg-white">
                    <div className="px-4 py-3 border-b border-gray-200">
                        <div className="text-xs font-semibold text-primary uppercase">Earnings (Monthly)</div>
                        <div className="text-lg font-bold text-gray-800">$40,000</div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>*/}
            </div>
        </div>

    );
}
