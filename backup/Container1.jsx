import React from 'react';
import bgImage from './assets/background.jpeg'
import pizza from './assets/pizza1.png'
import Leaves from './assets/img002.png'
import tomato from './assets/img001.png'
import star from './assets/check.png'
import basket from './assets/basket.png'

function Container1(props) {
    let [screen, setScreen] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const size = () => {
            setScreen(window.innerWidth)
        }
        window.addEventListener("resize", size)
        return () => {
            window.removeEventListener("resize", size)
        }
    }, [])

    const divImageLeft = () => {
        return (
            <>
             <div className='border-2 border-black flex-1
             flex flex-col items-center justify-center my-3 sm:my-0'>

                <div className='flex flex-col sm:items-start'>
                    <p className='text-white bg-red-600 p-1 px-3 font-semibold text-xs sm:text-base text-center'>Free Home Delivery 24 Hours</p>

                    <h1 className='font-extrabold text-3xl text-center
                    lg:text-5xl sm:text-start sm:text-3xl
                    '>ENJOY YOUR</h1>

                    <h1 className='font-extrabold text-3xl text-center
                    lg:text-5xl sm:text-start sm:text-3xl
                    '>PIZZA IN TOWN!</h1>
                    
                    {screen > 639 ? <>{ulData()}
                    {buttonOrderNow()}
                    </> : null}
                </div>

             </div>
            </>
        )
    }

    const divImageRight = () => {
        return (
            <>
             <div className='border-2 border-red-500 flex-1 relative
             flex flex-col items-start bg-transparent
             '>
                <img className='w-5/6 z-10' src={pizza} alt="image" />
                <img className='w-1/4 absolute
                right-3.5 mr-2 animate-move-left-right
                ' src={tomato} alt="image" />
                <img className='w-1/4 absolute
                left-3.5 ml-3 bottom-0 animate-move-left-right
                ' src={Leaves} alt="image" />
             </div>
            </>
        )
    }

    //unordered list ===>
        const ulData = () => {
            return (
                <>
                    <ul className='border-2 border-black w-4/5 my-3'>
                        <li className='flex font-semibold items-center justify-start gap-2'>
                            <img className='w-3.5' src={star} alt="check" />
                                Freshly baked pizzas</li>
                        <li className='flex font-semibold items-center justify-start gap-2'>
                            <img className='w-3.5' src={star} alt="check" />
                                Endless toppings!</li>
                        <li className='flex font-semibold items-center justify-start gap-2'>
                            <img className='w-3.5' src={star} alt="check" />
                                fast delivery!</li>
                    </ul>
                </>
            )
        }
    //unordered list ===>

    //button order now ===>
    const buttonOrderNow = () => {
        return (
            <>
                <div className='border-2 border-black w-full
                    flex items-center justify-center sm:justify-start
                    '>
                    <div className='border-2 border-black'>
                        <button className='bg-addToCart text-white font-bold p-2 pr-4 rounded-full active:opacity-85 shadow-lg active:shadow-none flex items-center justify-center'>
                            <img className='w-7' src={basket} alt="image" />
                            ORDER NOW
                        </button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div style={{backgroundImage: `url(${bgImage})`,}}
        className='border-2 border-red-600 flex items-center justify-center bg-cover bg-center w-full z-10
        '>
            <div className='border-2 border-black bg-background w-full flex justify-between max-w-screen-2xl bg-inherit
            
            flex-col
            sm:flex-row
            sm:items-center
            h-auto
            '>

                {screen < 640 ? 
                <>
                    {divImageLeft()}
                    <div className='border-2 border-green-950 flex items-center justify-center flex-col'>
                        <div className='border-2 w-4/5 border-pink-600'>
                            {divImageRight()}
                        </div>
                        {ulData()}
                        {buttonOrderNow()}
                    </div>
              
                </> : <>
                    {divImageLeft()}
                    {divImageRight()} 
                </>}
            </div>
        </div>
    );
}

export default Container1;