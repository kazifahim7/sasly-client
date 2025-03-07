"use client"
import { useUser } from "@/context/userContext";
import { selectAllProducts } from "@/redux/Feature/productSlice";
import { useAppSelector } from "@/redux/hook";
import { logOut } from "@/service/Auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { FaRegHeart } from "react-icons/fa6";
import { toast } from "sonner";


const Navbar = () => {
    const pathname = usePathname()
    const router =useRouter()
    const {user,setIsLoading,setReload} = useUser()
    const favProduct = useAppSelector(selectAllProducts)
    
    const handleLogOut= ()=>{
        logOut()
        router.push('/')
        setIsLoading(true)
        setReload(true)
        toast.success("log out successful")
        
        
    }
    


    return (
        <div className="navbar container mx-auto">
            <div className="flex-1 flex items-center">
                <div className="flex items-center gap-1">
                    <Link href={'/'}> <Image height={50} width={50} alt="pic" src={'https://html.pixelfit.agency/sasly/sasly-creative-agency/assets/images/loader.png'} ></Image></Link>
                    <h6 className="text-2xl text-black font-extrabold">Sasly</h6>
                </div>
                <div className="mx-auto">
                    <Link href={"/"} className={` ${pathname === '/' && "text-orange-400"} font-bold text-xl`}> Home</Link>
                    <Link href={"/product"} className={`${pathname === '/product' && "text-orange-400"} font-bold text-xl`}> Product</Link>
                </div>
            </div>
            <div className="flex gap-1">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator ">
                            <FaRegHeart className="text-2xl" />
                            <span className="badge badge-sm indicator-item">{favProduct.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold"> {favProduct.length} Items</span>
                            <div className="card-actions">
                                <Link href={'/cart'} className="btn bg-orange-500 btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {user?.role ? <div>
                    
                    <div className="dropdown dropdown-end ml-2">


                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border border-orange-400">
                                <Image
                                    height={150}
                                    width={150}
                                    alt="Tailwind CSS Navbar component"
                                    src="https://i.ibb.co.com/YBM8yh2K/11539820.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link href={"/dashboard/user/profile"} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link href={'/dashboard/user/product'}>DashBoard</Link></li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div>
                </div> : <div>
                    <Link href={'/login'} className="btn bg-orange-400 rounded-2xl text-black">Login</Link>
                    
                    </div>}


                
            </div>
        </div>
    );
};

export default Navbar;