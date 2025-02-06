import React from 'react';
import bgImage from './assets/container6/2920.png'
import img1 from './assets/container6/9038903809.png'
import img2 from './assets/container6/shape34.png'
import img3 from './assets/container6/shape35.png'

function Container6(props) {
    const BtnFunction = () => {
        return (
            <button class="mt-4 flex items-center justify-center gap-2 rounded-full before:ease relative bg-addToCart p-2 px-4 overflow-hidden border-none border-addToCart text-white font-bold shadow-2xl shadow-[#5c2a2a] active:shadow-none transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-200 hover:text-black 
            hover:shadow-[#25252562] hover:before:h-64 hover:before:-translate-y-32 active:opacity-85 mb-4">
                <span class="relative z-10">SEE ALL MENU</span>
            </button>
        )
    }

    return (
        <div style={{backgroundImage: `url(${bgImage})`,}} className='flex items-center justify-center bg-cover bg-center w-full z-10 relative'>
            <div className='w-full flex flex-col lg:flex-row justify-center max-w-screen-2xl bg-inherit py-16 lg:gap-0 gap-8 px-14 '>

                <div className=' flex flex-col justify-center items-center lg:items-start gap-4'>

                    <p className='font-bold text-4xl lg:text-5xl text-center lg:text-start'>
                        Chicken <br></br>
                        King Burger
                    </p>

                    <p className='max-w-[500px] text-sm text-gray-500'>
                        Piorem ipsum dolor sit amet consecte eliturabitur venenatis, nisl in bib endum commodo, sapien eusto cursus are urnainibus.
                    </p>

                    {BtnFunction()}

                </div>

                <div className=' flex items-center justify-center flex-1'>
                    <img className='' src={img1} alt="" />
                </div>

                <img className='absolute left-0 bottom-1/3 -z-10' src={img2} />
                <img className='absolute right-0 bottom-24 -z-10' src={img3}  />
            </div>
        </div>
    );
}

export default Container6;