import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Register = () => {
    return (
        <div className="flex flex-col justify-center h-screen px-6 py-12 lg:px-8">
                <div className="mx-auto">
                    <img src={logo} alt="Logo" className="mx-auto h-22 w-auto" />
                    <h1 className="mt-10 text-2xl font-extrabold">Sign up to your account</h1>
                </div>
                <div className="mt-10 mx-auto w-full lg:w-96">
                    <form className="space-y-4 lg:space-y-6">
                        <div>
                            <label htmlFor="username">Username</label>
                            <div className="mt-2">
                                <input type="text" name="username" placeholder="Username" autoFocus autoComplete="username" className="block w-full px-2 py-2 outline-none rounded-md shadow-sm border border-gray-300 focus:border-blue-400 focus:ring focus:ring-2 focus:ring-blue-200 " required/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <div className="mt-2">
                                <input type="email" name="email" placeholder="Email address" autoFocus autoComplete="email" className="block w-full px-2 py-2 outline-none rounded-md shadow-sm border border-gray-300 focus:border-blue-400 focus:ring focus:ring-2 focus:ring-blue-200 " required/>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="password">Password</label>
                                <div class="text-sm">
                                    <Link to='/forgot-password' class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input type="password" name="password" placeholder="********" autocomplete="current-password" className="block w-full px-2 py-2 outline-none rounded-md shadow-sm border border-gray-300 focus:border-blue-400 focus:ring focus:ring-2 focus:ring-blue-200 " required/>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="block p-2 w-full rounded-md outline-none ring-2 ring-inset bg-indigo-600 text-white leading-6 hover:bg-indigo-500 focus:border-blue-700 focus:ring-2 focus:ring-blue-300 ">Sign Un</button>
                        </div>
                    </form>
                </div>
                <div className="mt-10 mx-auto">
                    <span>Already have an account? <Link to='/login'  class="font-semibold text-indigo-600 hover:text-indigo-500">Sign In</Link></span>
                </div>
        </div>
    )
}

export default Register;