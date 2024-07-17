import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/mfs.png';
import MenuItem from './Menu/MenuItem';
import { RiLoginBoxFill } from "react-icons/ri";
import AdminMenu from './Menu/AdminMenu';
import AgentMenu from './Menu/AgentMenu';
import UserMenu from './Menu/UserMenu';

const Sidebar = () => {
    const [isActive, setActive] = useState(false)

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    // const role = "admin"
    const role = "agent"
    // const role = "user"

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-base-200 text-gray-800 flex justify-between md:hidden'>
                <div className='cursor-pointer '>
                    <div className='block p-4 font-bold '>
                        <Link className='flex items-center gap-3' to={'/'}>
                            <img
                                // className='hidden md:block'
                                src={logo}
                                alt='logo'
                                width='60'
                                height='60'
                                className='rounded-full border-4'
                            />
                            <h1>Mobile Financial Service (MFS)</h1>
                        </Link>
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-base-200 w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <Link to='/' className='cursor-pointer w-full hidden md:flex px-4 py-4 shadow-lg rounded-lg justify-center items-center bg-white mx-auto'>
                            <div className='flex items-center gap-3'>
                                <img
                                    // className='hidden md:block'
                                    className='rounded-full border-4 '
                                    src={logo} alt='logo'
                                    width='70'
                                    height='70'
                                />
                                <h2 className='text-xl font-bold text-black'>Mobile Financial Service (MFS)</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/*  Menu Items */}
                        <nav>
                            <MenuItem label={'Login'} address={'/login'} icon={RiLoginBoxFill} />
                            {role === 'admin' && <AdminMenu />}
                            {role === 'agent' && <AgentMenu />}
                            {role === 'user' && <UserMenu />}



                            {/* {isAdmin === 'admin' && <AdminMenu />}
                            {isAdmin === 'agent' && <GuestMenu />}
                            {isAdmin === 'user' && <GuestMenu />} */}
                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                    <button onClick={''}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar