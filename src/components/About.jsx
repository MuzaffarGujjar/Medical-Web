import React from 'react'
import img from "../assets/img/about.jpg"

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
            <div className='w-full lg:w-3/4 space-y-4'>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>About Us</h1>
                <p className='text-justify lg:text-start'>Dedicated to advancing healthcare knowledge,
                 our medical website strives to provide
                  accurate information, expert guidance, 
                  and support for optimal well-being.</p>
                <p className='text-justify lg:text-start'>We are committed to promoting health
                 and wellness through reliable information,
                  expert insights, and compassionate guidance
                   on our medical website.</p>
                <p className='text-justify lg:text-start'>Empowering lives with trusted
                health information. Our medical website
                is dedicated to fostering well-being
                through knowledge, care, and community support.</p>
            </div>
            <div className='w-full lg:w-3/4'>
                <img src={img} alt="img" className='rounded-lg' />
            </div>
        </div>
    )
}

export default About