import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import useAddCartProducts from "./useAddCartProducts";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [data, cartRefetch] = useAddCartProducts();
    const navigate = useNavigate();
    const handleLogOut = () => {
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    logOut()
                        .then(() => {
                            swal("Log Out", "successful", "success")
                            cartRefetch();
                            navigate('/')
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            });
    }
    const totalPrice = data?.reduce((total, item) => total + item.price, 0);
    const subTotalPrice = totalPrice?.toFixed(2);

    return (
        <div className="BG sticky top-0 z-10 border-b-2 border-[#333c49]">
            <div className="navbar max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/messages"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Messages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/messages"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Messages
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a >
                        <Link to={'/'}>
                            <img className="w-[80px] object-contain" src="https://i.ibb.co/b6828Lq/Colorful-Illustrative-Online-Shop-Logo-5.png" alt="" /></Link>
                    </a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                }
                            >
                                Messages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/messages"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                }
                            >
                                Messages
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end text-black font-semibold">
                    <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator bg-white p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{data?.length}</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{data?.length} Items</span>
                                    <span className="TEXT">Subtotal: ${subTotalPrice}</span>
                                    <div className="card-actions">
                                        <Link to='/showAddCarts' className="btn btn-primary btn-block">View cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {user && user?.email ?
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to="/dashboard" className="justify-between">
                                                <div className="flex gap-2 items-center">
                                                    <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6065/6065481.png" alt="" />
                                                    <h2>Dashboard</h2>
                                                </div>
                                            </Link>
                                        </li>
                                        <li><button onClick={handleLogOut}>
                                        <div className="flex gap-2 items-center">
                                                    <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/9653/9653907.png" alt="" />
                                                    <h2>Logout</h2>
                                                </div>
                                            
                                            </button></li>
                                    </ul>
                                </div> :
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#fdc816] border px-3 py-1 rounded" : "text-white"
                                    }
                                >
                                    Login
                                </NavLink>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;