import React from 'react';
import img1 from './assets/container5/about-pizzaw.png'
import img2 from './assets/container5/shape33.png'
import img3 from './assets/container5/shape23.png'

function Container5(props) {
    const BtnFunction = () => {
        return (
            <button class=" flex items-center justify-center gap-2 rounded-full before:ease relative bg-red-500 p-2 px-4 overflow-hidden border-none border-addToCart text-white font-bold shadow-2xl shadow-[#5c2a2a] active:shadow-none transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-addToCart before:duration-200 hover:text-white 
            hover:shadow-[#25252562] hover:before:h-64 hover:before:-translate-y-32 active:opacity-85 mb-4">
                <span class="relative z-10">SEE ALL MENU</span>
            </button>
        )
    }

    return (
        <div className='flex items-center justify-center bg-cover bg-center w-full z-10 bg-white '>

            <div className='bg-background w-full flex flex-col lg:flex-row justify-center max-w-screen-2xl bg-inherit  pt-24 pb-24 px-5 lg:px-0 gap-10 lg:gap-10 relative'>

                <div className=' flex items-center justify-center lg:justify-end relative '>

                    <img className='absolute -top-10 -left-10 lg:-left-10' src={img2} alt="image" />

                    <img className='w-full z-10' src={img1} alt="image" />
                    
                </div>

                <div className=' flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-3'>

                    <p className='text-center lg:text-start font-extrabold text-xl sm:text-3xl'>
                    Panpie, Burgers, And <br></br>
                    Best Pizzas in Town
                    </p>

                    <p className='text-yellow-500 font-bold text-center lg:text-start'>
                        We put 100% of love and dedication into our dishes
                    </p>

                    <p className='w-auto lg:w-full lg:max-w-sm text-start my-5 lg:my-0 lg:text-start text-gray-700'>
                        Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.
                    </p>

                    {BtnFunction()}
                </div>

                <img className='opacity-0 lg:opacity-100 absolute right-0 bottom-24 animate-move-left-right w-52' src={img3} alt="img" />

            </div>
        </div>
    );
}

export default Container5;