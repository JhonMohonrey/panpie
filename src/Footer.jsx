import React from 'react';
import logo from './assets/Footer/logo2.png'
import facebook from './assets/Footer/11.png'
import x from './assets/Footer/22.png'
import link from './assets/Footer/33.png'
import pin from './assets/Footer/44.png'

function Footer(props) {

    const render = (title, data1, data2, data3, data4, data5) => {
        return (
            <div className=' flex flex-col items-center lg:items-start lg:w-1/5 w-full pb-2 '>
                <p className='text-white text-center lg:text-start text-2xl font-bold my-5'>{title}</p>

                <div className='flex flex-col gap-3'>
                    <p className='text-white hover:ml-5 cursor-pointer transition-all duration-300
                    active:opacity-80 select-none
                    '> <span className='text-sm mr-1 '>&#9654;</span> {data1}</p>
                    <p className='text-white hover:ml-5 cursor-pointer transition-all duration-300
                    active:opacity-80 select-none
                    '> <span className='text-sm mr-1 '>&#9654;</span> {data2}</p>
                    <p className='text-white hover:ml-5 cursor-pointer transition-all duration-300
                    active:opacity-80 select-none
                    '> <span className='text-sm mr-1 '>&#9654;</span> {data3}</p>
                    <p className='text-white hover:ml-5 cursor-pointer transition-all duration-300
                    active:opacity-80 select-none
                    '> <span className='text-sm mr-1 '>&#9654;</span> {data4}</p>
                    <p className='text-white hover:ml-5 cursor-pointer transition-all duration-300
                    active:opacity-80 select-none
                    '> <span className='text-sm mr-1 '>&#9654;</span> {data5}</p>
                </div>
            </div>
        )
    }

    const data = (day, date, isTrue) => {
        return (
            <p className='text-white my-3 select-none'> 
                <span className='opacity-80'>{day}</span> : <span className={`${isTrue ? "text-yellow-500" : "text-white"}`}>{date}</span>
            </p>
        )
    }
    return (
        <div className=' flex items-center justify-center bg-cover bg-center w-full bg-[#1a1a1a] py-10 '>

            <div className=' z-30 w-full max-w-screen-2xl flex items-center 
            flex-col 
            '>
                
                <div className='
                flex gap-5 lg:gap-5 w-full items-center justify-center
                flex-col lg:flex-row 
                '>
                    <div className=' flex flex-col items-center justify-center lg:items-start'>
                        <img 
                        className='w-52 select-none'
                        src={logo} alt="" />

                        <p className='text-white w-72 my-5 text-center lg:text-start select-none'>128 6th Ave,New York, NY 10015 United States, Dcca-1212</p>

                        <div className='flex gap-2  items-center justify-start'>
                            <div className='p-2 rounded-full border-[1px] border-white cursor-pointer hover:bg-red-500 transition-all duration-300 bg-black'>
                                <img 
                                className='w-6' 
                                src={facebook} alt="icon" />
                            </div>

                            <div className='p-2 rounded-full border-[1px] border-white cursor-pointer hover:bg-red-500 transition-all duration-300 bg-black'>
                                <img 
                                className='w-6' 
                                src={x} alt="icon" />
                            </div>

                            <div className='p-2 rounded-full border-[1px] border-white cursor-pointer hover:bg-red-500 transition-all duration-300 bg-black'>
                                <img 
                                className='w-6' 
                                src={link} alt="icon" />
                            </div>

                            <div className='p-2 rounded-full border-[1px] border-[#ffffffb9] cursor-pointer hover:bg-red-500 transition-all duration-300 bg-black'>
                                <img 
                                className='w-6' 
                                src={pin} alt="icon" />
                            </div>
                        </div>
                    </div>

                    {render("Hot Menu", "BBQ Pizza TinTin", "Burger king", "Cheesy Pizza", "Chocolate Donuts", "Chicken Sandwich")}

                    <div className=' '>
                        <p className='font-bold text-2xl text-white my-5 text-center lg:text-start'>Opening Hours</p>
                        {data("Monday", "10.00am - 05.00pm", false)}
                        {data("Tuesday", "10.20am - 05.30pm", false)}
                        {data("Wednesday", "10.30am - 05.50pm", false)}
                        {data("Thursday", "11.00am - 07.10pm", false)}
                        {data("Friday", "Close", true)}
                    </div>
                </div>

                <div className=' w-full flex items-center justify-center gap-5 mt-5'>
                    <div className='border-2 w-4/5 hidden lg:block rounded-full opacity-60'></div>
                        <p className='text-white my-5 text-center lg:flex-shrink-0'>
                            © {new Date().getFullYear()} Jhon Mohonrey Ramos. All Rights Reserved.
                        </p>
                    <div className='border-2 w-4/5 hidden lg:block rounded-full opacity-60'></div>
                </div>

            </div>

        </div> 
    );
}

export default Footer;