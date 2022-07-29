import React, { useState } from 'react'
import Logo from '../assets/logo.svg';
import { FaArrowRight } from 'react-icons/fa';

function NavLink({ label, section }) {
    return (
        <button className='text-textBlack text-xl font-normal hover:text-mdAquamarine transition-all items-center after:h-1 after:rounded-full after:absolute hover:after:w-full after:transition-all after:bg-mdAquamarine relative after:bottom-0 after:left-0 after:w-0'>
            <div>
                <span>{label}</span>
            </div>
        </button>
    )
}

export function BookNow() {
    return (
        <button className='bg-mdAquamarine group min-w-fit min-h-fit justify-center text-lg py-2 px-1.5 whitespace-nowrap flex flex-row items-center gap-2 rounded-lg text-black hover:bg-black transition-all hover:text-white'>
            <span>Book Now</span>
            <span className='group-hover:translate-x-1 transition-transform'><FaArrowRight /></span>
        </button>
    )
}
function MenuToggle({ open }) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 w-[30px]`}>
            <span className={`w-full h-0.5 transition-all ${open && 'rotate-45 translate-y-[10px]'} bg-chineeseBlack rounded-full`}></span>
            <span className={`w-full h-0.5 transition-all ${open && 'opacity-0'} bg-chineeseBlack rounded-full`}></span>
            <span className={`w-full h-0.5 transition-all ${open && '-rotate-45 -translate-y-[10px]'}  bg-chineeseBlack rounded-full`}></span>
        </div>
    )
}


function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className='w-full h-[80px] px-2 flex-center z-20 lg:shadow-lg bg-white sticky top-0 left-0 right-0'>
            <div className='container mx-auto flex flex-row items-center justify-between gap-3'>
                <div className="logo">
                    <div className='flex items-center justify-center w-[180px] h-full'>
                        <img src={Logo} className='w-full h-full object-fill' alt="" />
                    </div>
                </div>
                <div className='links flex items-center gap-2'>
                    <nav className={`flex items-center transition-all bg-white delay-75 ${!open ? 'h-0 p-0 top-0' : ''} lg:h-fit flex-col lg:flex-row gap-3 fixed lg:static sm:p-0 lg:p-0 shadow-lg lg:shadow-none top-[80px] overflow-hidden left-0 w-full`}>
                        <NavLink label='Home' />
                        <NavLink label='Contact' />
                        <NavLink label='Team' />
                        <NavLink label='Patients' />
                    </nav>
                    <div className='hidden lg:inline-flex'><BookNow /></div>
                </div>
                <button className='flex items-center lg:hidden justify-center' onClick={() => { setOpen(!open) }}>
                    <MenuToggle open={open} />
                </button>
            </div>
        </header>
    )
}

export default Header