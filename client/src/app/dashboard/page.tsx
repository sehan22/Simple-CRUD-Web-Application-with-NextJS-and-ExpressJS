import React from 'react';
import {FaCalendar, FaClipboardList, FaComments, FaDollarSign, FaDownload, FaLongArrowAltRight} from "react-icons/fa";

export default function Dashboard() {
    return (

        <div className="flex flex-col gap-5 px-10 flex-1 font-nunito">
            {/*Header*/}
            <div className="flex justify-between items-center pt-5">
                <h1 className="text-Dark text-[25px]">Dashboard</h1>
                <button
                    type="button"
                    className="hidden sm:flex items-center justify-center text-normal gap-2 px-2 py-1 bg-Primary rounded shadow-md text-white"
                >
                    <FaDownload className="text-small"/>
                    Generate Report
                </button>
            </div>

            {/*4 Cards*/}
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
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Success rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Success">Earnings (Annual)</p>
                        <h1 className="font-bold text-[20px] text-Dark">$ 215,000</h1>
                    </div>

                    <FaDollarSign className="text-[28px] text-[#dddfeb]"/>
                </div>

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Info rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Info">Tasks</p>
                        <h1 className="font-bold text-[20px] text-Dark">50%</h1>
                    </div>

                    <div className="flex-1 mb-5 h-full items-end flex px-4">
                        <div className="w-full h-2 rounded-full bg-[#eaecf4]">
                            <div className="w-[50%] bg-Info h-full rounded-full"></div>
                        </div>
                    </div>

                    <FaClipboardList className="text-[28px] text-[#dddfeb]"/>
                </div>

                <div
                    className="flex justify-between items-center px-5 py-7 border-s-4 border-Warning rounded shadow-sm bg-white">
                    <div className="flex flex-col">
                        <p className="font-bold uppercase text-[11px] text-Warning">Pending Requests</p>
                        <h1 className="font-bold text-[20px] text-Dark">18</h1>
                    </div>

                    <FaComments className="text-[28px] text-[#dddfeb]"/>
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

            {/*chart*/}
            <div>
                <div>

                </div>

                <div></div>
            </div>

            {/*details*/}
            <div className="flex w-full justify-center items-start mx-auto gap-5">

                <div className="flex flex-col justify-center items-center gap-5 flex-1">

                    {/*projects*/}
                    <div className="w-full bg-Light rounded" style={{boxShadow: '0 0px 24px rgba(0, 0, 0, 0.08)'}}>

                        <div
                            className="flex justify-between items-center p-5 border-b-2 border-gray-200 border-opacity-50 py-3 font-nunito text-subtopic text-Primary font-bold">
                            Project
                        </div>

                        {/*Server Migration*/}
                        <div
                            className="flex flex-col justify-center p-5 items-center w-full bg-white font-nunito text-[13px] text-Secondary font-bold">

                            <div className="flex justify-between items-center w-full">
                                <h1>Server Migration</h1>
                                <h1>20%</h1>
                            </div>

                            <div className="w-full h-4 bg-Secondary bg-opacity-20 rounded-md">
                                <div className="w-[20%] rounded-full h-full bg-Danger"></div>
                            </div>
                        </div>

                        {/*Sales Tracking*/}
                        <div
                            className="flex flex-col justify-center p-5 items-center w-full bg-white font-nunito text-[13px] text-Secondary font-bold">

                            <div className="flex justify-between items-center w-full">
                                <h1>Sales Tracking</h1>
                                <h1>40%</h1>
                            </div>

                            <div className="w-full h-4 bg-Secondary bg-opacity-20 rounded-md">
                                <div className="w-[40%] rounded-full h-full bg-Warning"></div>
                            </div>
                        </div>

                        {/*Customer Database*/}
                        <div
                            className="flex flex-col justify-center p-5 items-center w-full bg-white font-nunito text-[13px] text-Secondary font-bold">

                            <div className="flex justify-between items-center w-full">
                                <h1>Customer Database</h1>
                                <h1>60%</h1>
                            </div>

                            <div className="w-full h-4 bg-Secondary bg-opacity-20 rounded-md">
                                <div className="w-[60%] rounded-full h-full bg-Primary"></div>
                            </div>
                        </div>

                        {/*Payout Details*/}
                        <div
                            className="flex flex-col justify-center p-5 items-center w-full bg-white font-nunito text-[13px] text-Secondary font-bold">

                            <div className="flex justify-between items-center w-full">
                                <h1>Payout Details</h1>
                                <h1>80%</h1>
                            </div>

                            <div className="w-full h-4 bg-Secondary bg-opacity-20 rounded-md">
                                <div className="w-[80%] rounded-full h-full bg-Info"></div>
                            </div>
                        </div>

                        {/*Account Setup*/}
                        <div
                            className="flex flex-col justify-center p-5 items-center rounded-b w-full bg-white font-nunito text-[13px] text-Secondary font-bold">

                            <div className="flex justify-between items-center w-full">
                                <h1>Account Setup</h1>
                                <h1>Completed!</h1>
                            </div>

                            <div className="w-full h-4 bg-Secondary bg-opacity-20 rounded-md">
                                <div className="w-[100%] rounded-full h-full bg-Success"></div>
                            </div>
                        </div>

                    </div>

                    {/*colour pallets*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

                        <div className="flex flex-col rounded justify-center items-center w-full bg-Primary p-5">
                            <h1 className="text-normal text-Light font-bold">Primary</h1>
                            <h1 className="text-small text-Light opacity-50">#4e73df</h1>
                        </div>

                    </div>
                </div>


                <div className="flex flex-col justify-start items-center gap-5 flex-1">

                    {/*Illustrations*/}
                    <div className="w-full bg-Light rounded" style={{boxShadow: '0 0px 24px rgba(0, 0, 0, 0.08)'}}>
                        <div
                            className="flex justify-between items-center p-5 border-b-2 border-gray-200 border-opacity-50 py-3 font-nunito text-subtopic text-Primary font-bold">
                            Illustrations
                        </div>

                        <div
                            className="flex flex-col justify-center p-5 gap-5 items-center w-full bg-white">
                            <div className="w-[400px] h-[200px] bg-gray-200"></div>

                            <div className="flex flex-col justify-center items-center w-full gap-5">
                                <p className="text-subtopic text-Secondary">
                                    Add some quality, svg illustrations to your project courtesy of unDraw, a constantly
                                    updated collection of beautiful svg images that you can use completely free and
                                    without attribution!
                                </p>

                                <div className="w-full">
                                    <h1 className="flex justify-start items-center gap-2 text-start text-Primary">
                                        Browse Illustrations on unDraw
                                        <FaLongArrowAltRight/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Development Approach*/}
                    <div className="w-full bg-Light rounded mb-10"
                         style={{boxShadow: '0 0px 24px rgba(0, 0, 0, 0.08)'}}>
                        <div
                            className="flex justify-between items-center p-5 border-b-2 border-gray-200 border-opacity-50 py-3 font-nunito text-subtopic text-Primary font-bold">
                            Development Approach
                        </div>

                        <div
                            className="flex flex-col justify-center p-5 items-center w-full bg-white font-nunito">

                            <div className="flex flex-col gap-5 justify-between items-center w-full">
                                <p className="text-subtopic text-Secondary">
                                    SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS
                                    bloat and poor page performance. Custom CSS classes are used to create custom
                                    components and custom utility classes.
                                </p>

                                <p className="text-subtopic text-Secondary">
                                    Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}
