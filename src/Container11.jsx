import React from 'react';
import smoke from './assets/container11/smoke.png'
import bike from './assets/container11/bike.png'
import call from './assets/container11/call icon.png'

function Container11(props) {
    return (
        <div className=' flex items-center justify-center bg-cover bg-center w-full bg-gray-100 relative'>

            <div className='bg-white absolute left-0 right-0
            top-2/4 bottom-0'>
            </div>
            
            <div className=' z-30 w-full max-w-screen-2xl flex items-center justify-center px-3 lg:px-0 lg:my-10 '>

            

                <div className=' bg-red-600  rounded-br-2xl rounded-tl-2xl lg:rounded-br-none lg:rounded-tl-none lg:rounded-tr-3xl lg:rounded-bl-3xl
                flex flex-col items-center justify-center lg:flex-row lg:px-2 lg:w-4/5  relative lg:overflow-visible
                '>

                    <div className=' py-8 lg:py-0 relative flex items-center justify-center'>

                        <img className='relative lg:mb-7 lg:-mt-7 z-10' src={bike} alt="image" />
                        <img
                        className='absolute bottom-1/3 w-28 left-0 animate-[wiggle_5s_linear_infinite]'
                        src={smoke} alt="image" />

                        <style>
                            {`
                            @keyframes wiggle {
                                0% { transform: translateX(-50px); }
                                50% { transform: translateX(5px); }
                                100% { transform: translateX(-50px); }
                            }
                            `}
                        </style>
                    </div>

                    <div className=' flex flex-col lg:flex-row justify-center lg:justify-between  items-center gap-5 '>
                        <div className=' sm:w-3/4 px-2'>
                            <p className='text-center text-white font-bold text-2xl lg:text-left
                            lg:text-3xl
                            '>Get Free Delivery!</p>

                            <p className='text-white text-sm text-center my-6 lg:text-left
                            lg:text-md
                            lg:mt-3 lg:mb-0
                            '>As well known and we are very busy all days beforeso we can guarantee your seat.</p>

                        </div>

                        <div className=''>

                            <div className='bg-yellow-400 px-3 lg:px-5 py-3 lg:mb-0 mb-12 gap-3 rounded-full flex items-center justify-center hover:cursor-pointer active:opacity-85 active:shadow-none shadow-lg shadow-[#00000050] transition-all duration-300'>
                                <img 
                                className='w-4 select-none'
                                src={call} alt="icon" />

                                <p 
                                className='text-white lg:text-sm font-bold select-none whitespace-nowrap'
                                >Call: +123456789999</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div> 
    );
}

export default Container11;