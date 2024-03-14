import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import { ArrowDownRightIcon, ArrowTrendingUpIcon, ArrowUpLeftIcon, ChatBubbleBottomCenterTextIcon, ShoppingCartIcon, TruckIcon, UsersIcon } from "@heroicons/react/24/outline";
import Charts from "../components/BarCharts";
import CustomPieChart from "../components/PieCharts";
import AreaCharts from "../components/AreaCharts";
import CustomLineChart from "../components/LineCharts";
import BarCharts from "../components/BarCharts";
import piggyProduct from '../images/piggy-84077fef.png';

const Dashboard = () => {

return (
        <>
            <Breamcums title="Dashboard">
                <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                <Link>Dashboard </Link>
            </Breamcums>
            <div className="mt-4 mx-4 pb-16">
                <div className="flex flex-wrap jusfity-between items-center gap-4 w-full">
                    <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow w-6/12 ">
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
                    <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow w-6/12 ">
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
                    <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow w-6/12 ">
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
                    <div className="flex-1 flex flex-col bg-white rounded-lg  p-5 shadow w-6/12 ">
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
                <div className="flex flex-col xl:flex-row mt-4 gap-4">
                    <div className="flex-8 w-full bg-white rounded-lg  p-5 shadow">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold">Revenue Updates</h2>
                            <span className="text-sm">Overview of Profit</span>
                        </div>
                        <AreaCharts grid={true} x={true} y={true} aspect={4/2} />
                    </div>
                    <div className=" w-full md:flex md:flex-wrap lg:flex md:gap-4">
                        <div className="w-full bg-white rounded-lg  p-5 shadow">
                            <h2 className="text-xl font-bold mb-3">Yearly Breakup</h2>
                            <CustomPieChart width='100%' aspect={4/1} />
                        </div>
                        <div className="w-full bg-white rounded-lg shadow ">
                            <h2 className="text-xl font-bold pl-6 py-5">Monthly Earnings</h2>
                            <div className=" ml-6 my-4">
                                <h2 className="text-2xl font-bold">$6,820</h2>
                                <span className="flex items-center gap-3 mt-3"><ArrowDownRightIcon className="w-7 h-7 rounded-full bg-red-200 p-2 text-red-500" /> +9% last year</span>
                            </div>
                            <AreaCharts aspect={4/1} color="#a0b8fe" />
                        </div>
                    </div>
                </div>
                <div className="mt-4 gap-4 w-full xl:flex">
                    <div className="w-full bg-white rounded-lg mb-4 p-5 shadow">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold">Employee Salary</h2>
                            <span className="text-sm">Every month</span>
                        </div>
                        <BarCharts x={true} aspect={4/3} barSize={15} color='#3b82f6' />
                    </div>
                    <div className=" w-full mb-4">
                        <div className="flex gap-4 w-full mb-4">
                            <div className="w-full bg-white shadow rounded-lg">
                                <div className="ml-6 mt-6">
                                    <span>Customers</span>
                                    <h2 className="text-2xl font-bold">$6,820</h2>
                                    <span className="flex items-center gap-3 mt-3"><ArrowUpLeftIcon className="w-7 h-7 rounded-full bg-green-200 p-2 text-green-500" /> +9%</span>
                                </div>
                                <AreaCharts aspect={4/2} color="#a0b8fe" />
                            </div>
                            <div className="w-full bg-white shadow rounded-lg p-6">
                                <div className=" ">
                                    <span>Customers</span>
                                    <h2 className="text-2xl font-bold">$6,820</h2>
                                    <span className="flex items-center gap-3 mt-3"><ArrowUpLeftIcon className="w-7 h-7 rounded-full bg-green-200 p-2 text-green-500" /> +9%</span>
                                </div>
                                <BarCharts aspect={4/2} color='#3b82f6' />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 bg-white shadow rounded-lg p-6">
                            <div className="flex items-center gap-4">
                                <img className="w-16 rounded-lg overflow-hidden" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="" />
                                <span>
                                    <h2 className="text-xl font-bold">Super awesome, Vue coming soon!</h2>
                                    <span>22 March, 2022</span>
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div class="flex -space-x-2 overflow-hidden">
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </div>
                                <ChatBubbleBottomCenterTextIcon className="w-8 h-8 p-2 bg-indigo-200 rounded-lg" />
                            </div>
                        </div>

                    </div>
                    <div className="flex-8 w-full rounded-lg  p-5 shadow bg-blue-400 text-white">
                        <div>
                            <h2 className="text-xl font-bold">Best selling products</h2>
                            <span className="text-sm">Overview 2023</span>
                        </div>
                        <div className="flex text-center items-center justify-center"><img className="w-10/12" src={piggyProduct} alt="" /></div>
                        <div className="flex flex-col gap-4 -mt-12 p-6 bg-white rounded-lg text-black z-10">
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm mb-3"><h2 className="text-lg font-bold">MaterialPro</h2>$23,568</span>
                                    <span className="text-xs bg-blue-100 text-blue-600 p-1 rounded">50%</span>
                                </div>
                                <div className="h-1 rounded-md bg-blue-400"></div>
                            </div>
                            <div className="">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm mb-3"><h2 className="text-lg font-bold">MaterialPro</h2>$23,568</span>
                                    <span className="text-xs bg-blue-100 text-blue-600 p-1 rounded">50%</span>
                                </div>
                                <div className="h-1 rounded-md bg-blue-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
