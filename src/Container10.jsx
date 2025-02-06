import React from 'react';
import img1 from './assets/container10/blog_1-390x340.jpeg'
import img2 from './assets/container10/blog_2-1-390x340.jpeg'
import img3 from './assets/container10/blog_4-1-390x340.jpeg'
import calendar from './assets/container10/calendar (1).png'
import label from './assets/container10/label.png'
import arrow from './assets/container10/right-arrow.png'

function Container10(props) {
    // <div className='border-2 border-black flex items-center justify-center bg-cover bg-center w-full'>
    //     <div className='border-2 border-black z-30 w-full max-w-screen-2xl flex items-center justify-center'>
    //         this is default Container
    //     </div>
    // </div> 
    
    let renderData = [
        {
            info: "Craving cheese pizza? Discover delicious recipes with rich, melty cheese, crispy crust, and perfect seasoning. Make your own cheesy masterpiece today!",
            img: `${img1}`,
            title: "Do You Think About Cheese Pizza Recipes?",
        },
        {
            info: "Try our new Chicken Strips, now made with fresh ingredients for a crispier, juicier taste! Perfectly seasoned and fried to golden perfection.",
            img: `${img2}`,
            title: "Chicken Strips With New Ingridents Made.",
        },
        {
            info: "Hot Cheesyraw Pasta crafted by its creator with a rich, creamy texture and bold flavors. A delicious twist on classic cheesy pasta perfection!",
            img: `${img3}`,
            title: "Hot Chessyraw Pasta Make Creator Fact.",
        },
    ]

    const render = () => {
        return (
            renderData.map((data, key) => {
                return <div key={key} 
                className=' lg:w-80 group relative overflow-hidden cursor-pointer flex flex-col rounded-2xl bg-white shadow-xl hover:shadow-2xl' >
                    {/* <p>{data.info}</p> */}

                    <div className='overflow-hidden'>
                        <img 
                        className='transition-all duration-300 group-hover:scale-110 w-full'
                        src={data.img} alt="images" />
                    </div>

                    <div className='flex items-center gap-1 px-3 sm:px-5 py-5'>
                        <img 
                        className='w-4 h-4 select-none'
                        src={calendar} alt="icon" />

                        <p 
                        className='text-xs select-none'
                        >August 24 2020</p>

                        <img
                        className='w-4 h-4 ml-2 select-none'
                        src={label} alt="icon" />

                        <p 
                        className='text-xs select-none'
                        >Label</p>
                    </div>

                    <div className=' sm:px-5 px-3'>
                        <p className='font-bold text-xl hover:text-red-600 transition-all duration-300 select-none'>{data.title}</p>
                    </div>

                    <div className=' sm:px-5 mb-4 lg:mb-8 px-2'>
                        <p className='text-gray-500 text-sm py-5 select-none'>{data.info}</p>

                        <div className='flex items-center gap-2 hover:gap-4 transition-all duration-300'>
                            <p className='text-gray-600 hover:text-red-600 transition-all duration-300 font-bold text-xs select-none active:opacity-80'>READ MORE</p>
                            <img className='w-3 select-none' src={arrow} alt="icon" />
                        </div>
                    </div>

                </div>
            })
        )
    }
    return (
        <div className=' flex items-center justify-center bg-cover bg-center w-full bg-gray-100 pb-5 '>
            <div className=' z-30 w-full max-w-screen-2xl flex items-center justify-center
            flex-col gap-5 
            '>

                <div className='mt-24'>
                    <p className='text-center text-sm font-bold text-red-600'>NEWS & BLOGS</p>
                    <p className='text-center font-bold lg:text-3xl text-2xl'>What’s Happening Your <br></br>
                    Near City & Town</p>
                </div>

                <div className='
                flex flex-col items-center justify-center gap-6 w-full lg:flex-row px-4 my-5
                '>
                    {render()}
                </div>
            </div>
        </div> 
    );
}

export default Container10;