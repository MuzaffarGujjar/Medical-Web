import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url("assets/img/home.png")] bg-no-repeat bg-cover opacity-90'>
            <div className='w-full lg:w-4/5 space-y-5 mt-10'>
                <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
                <p>Explore a comprehensive medical website
                    for trusted health information,
                    expert insights, and resources to
                    empower your well-being journey effectively.</p>
                <Button title="See Services" />
            </div>
        </div>
    )
}

export default Home