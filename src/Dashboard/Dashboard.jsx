import { useContext, useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAddCartProducts from "../Components/useAddCartProducts";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const [cartRefetch] = useAddCartProducts();
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

    return (
        <div className="drawer max-w-[1400px] mx-auto text-black">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex md:flex-row flex-col">
                {/* Sidebar for large devices */}
                <div className="flex lg:hidden">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                            onClick={() => setOpen(!false)}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                </div>
                <div className="hidden lg:block md:w-72 p-5 text-center bg-[#ffb60d] md:min-h-screen">
                    <div className="flex justify-center">
                        <div className="flex items-center gap-3 mb-5">
                            <img className="w-[100px] h-[120px] border rounded object-cover" src={user?.photoURL} alt="" />
                            <div className="text-start">
                                <img className="w-[120px] h-[70px]" src="https://cdn-icons-png.flaticon.com/512/5578/5578628.png" alt="" />
                                <h2 className="text-[18px] font-medium">{user?.displayName}</h2>
                                <p className="border-2 rounded inline px-1 border-white text-sm">Admin</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 border-t-2 border-white pt-2">Admin Dashboard</h2>
                    <ul className="menu px-4 space-y-2 text-[18px] font-medium">

                        <li>

                            <NavLink
                                to="/dashboard/allProducts"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-white rounded text-white" : ""
                                }
                            >
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://cdn-icons-png.flaticon.com/512/7610/7610070.png" alt="" />
                                    <h2>All Products</h2>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-white rounded text-white" : " "
                                }
                            >
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://cdn-icons-png.flaticon.com/512/9094/9094119.png" alt="" />
                                    <h2>
                                        Profile
                                        <span className="badge ml-4 bg-[#ffb70d]">New</span>
                                    </h2>
                                </div>

                            </NavLink>
                        </li>
                        <li>

                            <NavLink
                                to="/dashboard/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-white rounded text-white" : ""
                                }
                            >
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://cdn-icons-png.flaticon.com/512/11065/11065773.png" alt="" />
                                    <h2>Add Product</h2>
                                </div>
                            </NavLink>
                        </li>
                        <li>

                            <NavLink
                                to="/dashboard/allUsers"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-white rounded text-white" : ""
                                }
                            >
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://cdn-icons-png.flaticon.com/512/7153/7153150.png" alt="" />
                                    <h2>All Users</h2>
                                </div>
                            </NavLink>
                        </li>
                        <li className="border-t-2 border-white pt-2">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "border-2 border-white rounded text-white" : " "
                                }
                            >
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://png.pngtree.com/png-clipart/20231220/original/pngtree-home-flat-violet-color-rounded-raster-icon-establishment-photo-png-image_13892591.png" alt="" />
                                    <h2>
                                        Home
                                    </h2>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogOut}>
                                <div className="flex gap-2 items-center">
                                    <img className="w-[30px] border rounded-full border-white" src="https://static.vecteezy.com/system/resources/thumbnails/010/986/894/small_2x/3d-rendering-of-logout-website-icon-png.png" alt="" />
                                    <h2>Logout</h2>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Page content here */}
                <div className="bg-white flex-1">
                    <div className="p-10">
                        <Outlet />
                    </div>
                </div>
            </div>
            {/* Drawer for medium and small devices */}
            {open && (
                <div className="drawer-side lg:hidden">
                    <label
                        htmlFor="my-drawer-3"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                        onClick={() => setOpen(!open)}
                    ></label>
                    <div className="menu p-4 w-80 bg-base-100 text-base-content">
                        <h2 className="text-xl font-bold mb-4 text-red-600">Dashboard Menu</h2>
                        <ul className="bg-green-400">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/settings">Settings</Link>
                            </li>
                            <li>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
