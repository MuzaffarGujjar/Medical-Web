import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='bg-backgroungColor text-white rounded-t-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className='w-full md:w-1/4'>
                    <h1 className='font-semibold text-xl pb-4'>WellnessVista.</h1>
                    <p className='text-sm'>our team of dedicated doctors, each specializing
                        such as orthopedics, cardiology, pediatrics,
                        neurology, dermatology and more.
                    </p>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>About Us</h1>
                    <nav className='flex flex-col gap-2'>
                        <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>About Us</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Services</Link>
                        <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Doctors</Link>
                    </nav>
                </div>
                <div>
                    <nav className='flex flex-col gap-2'>
                        <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Services</h1>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Lab Test</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Health Check</Link>
                        <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer'>Heart Health</Link>
                    </nav>
                </div>
                <div>
                    <nav className='flex flex-col gap-2'>
                        <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Services</h1>
                        <Link to='about' spy={true} smooth={true} duration={500} className=' cursor-pointer'> D-Ground, Satiana Road Faisalabad Pakistan</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className=' cursor-pointer'>Support@care.com</Link>
                        <Link to='about' spy={true} smooth={true} duration={500} className=' cursor-pointer'>+92 320 655 7458</Link>
                    </nav>
                </div>
            </div>
            <div>
                <p className='text-center py-4'>@Copyright developed by <span className='text-hoverColor text-xl'>Muzaffar Techs</span> | All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer