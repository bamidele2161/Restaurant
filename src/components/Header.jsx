import React, {useState} from 'react'
import logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import {MdShoppingCart, MdAdd, MdLogout} from 'react-icons/md'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from "../context/stateProvider"
import { actionType } from "../context/reducer"

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

const [{ user }, dispatch] = useStateValue()

const [isMenu, setisMenu] = useState(false);

const login = async () => {
    if(!user) {
        const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    else{
        setisMenu(!isMenu);   
    };

}

const logout = () => {
    setisMenu(false);
    localStorage.clear();

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* desktop & tablet*/}
        <div className="hidden md:flex w-full justify-between">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} className="w-10 object-cover" alt="logo" />
                <p className="text-headingColor text-xl font-bold">City</p>
            </Link>

            <div className="flex items-center gap-8">
                <motion.ul 
                    initial={{opacity: 0, x : 200}}
                    animate={{opacity: 1, x : 0}}
                    exit={{opacity: 0, x : 200}}
                    className="flex items-center gap-8">
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Home</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Menu</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>About Us</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Service</li>
                </motion.ul>

                <div className="relative flex items-center justify-center">
                    <MdShoppingCart className="text-textColor text-2xl cursor-pointer"/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>

                <div className="relative">
                    <motion.img whileTap={{scale: 0.6}} src={user? user.photoURL: Avatar} alt="avatar" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" onClick={login}/>
                    {
                        isMenu && (
                            <motion.div 
                                initial= {{opacity: 0, scale: 0.6}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale:0.6}}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2">
                                {
                                    user && user.email === "akinyemibamidele2@gmail.com" && (
                                        <Link to="/createItem">
                                            <p className="flex cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100 items-center gap-3"  onClick={() => setisMenu(false)}>New Item <MdAdd /></p>
                                        </Link>
                                    )
                                }
                                <p className="flex cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100 items-center gap-3" onClick={logout}>Logout<MdLogout/></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>

        </div>

        {/* mobile */}
        <div className="flex md:hidden w-full h-full  justify-between">
            

                <div className="relative flex items-center justify-center">
                    <MdShoppingCart className="text-textColor text-2xl cursor-pointer"/>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>

                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} className="w-10 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>

                <div className="relative">
                    <motion.img whileTap={{scale: 0.6}} src={user? user.photoURL: Avatar} alt="avatar" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full" onClick={login}/>
                    {
                        isMenu && (
                            <motion.div 
                                initial= {{opacity: 0, scale: 0.6}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale:0.6}}
                                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0">
                                {
                                    user && user.email === "akinyemibamidele2@gmail.com" && (
                                        <Link to="/createItem">
                                            <p className="px-4 py-2 flex cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-100 items-center ">New Item <MdAdd /></p>
                                        </Link>
                                    )
                                }

                                <ul className="flex flex-col">
                                    <li className="px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Home</li>
                                    <li className="px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Menu</li>
                                    <li className="px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>About Us</li>
                                    <li className="px-4 py-2 text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer" onClick={() => setisMenu(false)}>Service</li>
                                </ul>
                                
                                <p 
                                className="m-2 p-2 rounded-md shadow-md flex cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base hover:bg-gray-300 bg-gray-200 items-center gap-3"
                                onClick={logout}
                                >
                                    Logout
                                    <MdLogout/>
                                </p>
                            </motion.div>
                        )
                    }
                </div>

        </div>
    </header>
  )
}

export default Header