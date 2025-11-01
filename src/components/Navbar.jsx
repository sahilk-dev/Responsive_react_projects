import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Initially false, meaning menu is closed.
    const [isOpen, setIsOpen] = useState(false);

    // This function toggles the mobile menu's visibility.
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    // The <nav> tag warps our entire navigation bar.
    <nav className='bg-white shadow-md border-b border-gray-200 fixed w-full top-0 z-50'>
        {/* Container: keeps navbar centered and aligned */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Flex container: logo, links, and humburger icon */}
            <div className='flex justify-between items-center h-16'>
                {/* Left Section - Logo / Brand  */}
                <div className='flex items-center'>
                    {/* <span className='text-2xl font-bold text-indigo-600'>MyBrand</span> */}
                    <img
                        src="https://www.svgrepo.com/show/328109/paypal.svg" 
                        alt="MyBrand Logo"
                        className='h-30 w-auto object-contain cursor-pointer'
                    />
                </div>

                {/* Middle Section - Desktop Menu Links */}
                {/* Hidden on small screens using 'hidden md:flex */}
                <div className='hidden md:flex space-x-8'>
                    <a href="#" className='text-gray-700 hover:text-indigo-600 font-medium'>Home</a>
                    <a href="#" className='text-gray-700 hover:text-indigo-600 font-medium'>About Us</a>
                    <a href="#" className='text-gray-700 hover:text-indigo-600 font-medium'>Services</a>
                    <a href="#" className='text-gray-700 hover:text-indigo-600 font-medium'>Contact Us</a>
                </div>

                {/* Right Section - Action Buttons (Desktop) */}
                <div className='hidden md:flex items-center space-x-4'>
                    <button className='px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 font-medium cursor-pointer'>
                        Login
                    </button>
                    <Link
                        to="/signup"
                        className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium cursor-pointer'
                    >
                    Sign Up
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile Only) */}
                <div className='md:hidden'>
                    <button
                        onClick={toggleMenu}
                        type='button'
                        aria-label='Toggle menu'
                        className='p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus: ring-indigo-500'
                    >
                        {/* SVG Icons: Hamburger or Close */}
                        {isOpen ? (
                            // Close (X) icon
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu (Visible only when isOpen = true) */}
        {isOpen && (
            <div className='md:hidden bg-white border-t border-gray-200'>
                <div className='space-y-1 px-4 py-3'>
                    {/* Each link is block level for easy tapping on mobile */}
                    <a href="#" className='block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md'>Home</a>
                    <a href="#" className='block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md'>About Us</a>
                    <a href="#" className='block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md'>Services</a>
                    <a href="#" className='block text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md'>Contact Us</a>
                </div>
                <div className='px-4 pb-3 flex flex-col space-y-2'>
                    <button className='w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover: bg-indigo-50 font-medium'>
                        Login
                    </button>
                    <Link
                        onClick={() => setIsOpen(false)}
                        to="/signup"
                        className='w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium text-center'
                    >
                    Sign Up
                    </Link>
                </div>
            </div>
        )}
    </nav>
  );
};

export default Navbar;
