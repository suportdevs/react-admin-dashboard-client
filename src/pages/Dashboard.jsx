import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import { ArrowDownRightIcon, ArrowTrendingUpIcon, ShoppingCartIcon, TruckIcon, UsersIcon } from "@heroicons/react/24/outline";
import Charts from "../components/BarCharts";
import CustomPieChart from "../components/PieCharts";
import AreaCharts from "../components/AreaCharts";
import CustomLineChart from "../components/LineCharts";
import BarCharts from "../components/BarCharts";

const Dashboard = () => {
    const [inactive, setInactive] = useState(true);
    const [offCanvas, setOffCanvas] = useState(false);
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
            <div className={`flex flex-col item-center w-full overflow-hidden transition-[margin] duration-300 lg:ml-[20%] ${inactive ? '' : 'lg:ml-[5rem]'}`}>
                <Header inactive={inactive} setInactive={setInactive}  offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
                <Breamcums title="Dashboard">
                    <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                    <Link>Dashboard </Link>
                </Breamcums>
                <div className="mt-4 mx-4 ">
                    <div className="flex jusfity-between items-center gap-4">
                        <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow">
                            <div className="flex gap-6">
                                <UsersIcon className="w-10 h-10 bg-blue-500 rounded p-2" />
                                <span>
                                    <h5 className="text-xs font-bold">Total Users</h5>
                                    <h1 className="text-2xl font-extrabold">7,520</h1>
                                </span>
                            </div>
                            <div className="h-auto w-full">
                                <CustomLineChart grid={true} />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow">
                            <div className="flex gap-6">
                                <ShoppingCartIcon className="w-10 h-10 bg-red-500 rounded p-2" />
                                <span>
                                    <h5 className="text-xs font-bold">Total Orders</h5>
                                    <h1 className="text-2xl font-extrabold">7,520</h1>
                                </span>
                            </div>
                            <div>
                                <Charts type='bar' />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow">
                            <div className="flex gap-6">
                                <TruckIcon className="w-10 h-10 bg-indigo-500 rounded p-2" />
                                <span>
                                    <h5 className="text-xs font-bold">Total Sales</h5>
                                    <h1 className="text-2xl font-extrabold">7,520</h1>
                                </span>
                            </div>
                            <div>
                                <CustomLineChart />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow">
                            <div className="flex gap-6">
                                <ArrowTrendingUpIcon className="w-10 h-10 bg-green-500 rounded p-2" />
                                <span>
                                    <h5 className="text-xs font-bold">Total Revenue</h5>
                                    <h1 className="text-2xl font-extrabold">7,520</h1>
                                </span>
                            </div>
                            <div>
                                <AreaCharts />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-4">
                        <div className="flex-8 w-8/12 bg-white rounded-lg  p-5 shadow">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Revenue Updates</h2>
                                <span className="text-sm">Overview of Profit</span>
                            </div>
                            <AreaCharts grid={true} x={true} y={true} aspect={4/2} />
                        </div>
                        <div className="flex-4 flex-col w-4/12 ">
                            <div className=" mb-4 bg-white rounded-lg  p-5 shadow">
                                <h2 className="text-xl font-bold mb-3">Yearly Breakup</h2>
                                <CustomPieChart width='100%' aspect={4/1} />
                            </div>
                            <div className="bg-white rounded-lg  ">
                                <h2 className="text-xl font-bold pl-6 py-5">Monthly Earnings</h2>
                                <div className=" ml-6 my-4">
                                    <h2 className="text-2xl font-bold">$6,820</h2>
                                    <span className="flex items-center gap-3 mt-3"><ArrowDownRightIcon className="w-7 h-7 rounded-full bg-red-200 p-2 text-red-500" /> +9% last year</span>
                                </div>
                                <AreaCharts aspect={4/1} color="#a0b8fe" />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-4">
                        <div className="flex-8 w-4/12 bg-white rounded-lg  p-5 shadow">
                            <div className="mb-4">
                                <h2 className="text-xl font-bold">Employee Salary</h2>
                                <span className="text-sm">Every month</span>
                            </div>
                            <BarCharts aspect={4/2} barSize={15} color='#3b82f6' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
