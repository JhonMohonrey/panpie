import React from 'react';
import background from './assets/container4/background4.jpeg'
import img1 from './assets/container4/9283.png'
import img2 from './assets/container4/89237.png'
import img3 from './assets/container4/9048.png'
import img4 from './assets/container4/40off.png'
import img5 from './assets/container4/shape21.png'

function Container4(props) {
    const BtnFunction = () => {
        return (
            <button class="flex items-center justify-center gap-2 rounded-full before:ease relative bg-red-500 p-2 px-4 overflow-hidden border-none border-addToCart text-white font-bold shadow-2xl shadow-[#5c2a2a] active:shadow-none transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-addToCart before:duration-200 hover:text-white 
            hover:shadow-[#25252562] hover:before:h-64 hover:before:-translate-y-32 active:opacity-85 mb-4">
                <span class="relative z-10">SEE ALL MENU</span>
            </button>
        )
    }

    return (
        <div className='flex flex-col items-center justify-center  w-full overflow-hidden bg-[#1a1a1a]'>
            <div className='h-3/4 w-full bg-fixed bg-cover bg-center flex items-center justify-center' 
             style={{ backgroundImage: `url(${background})`, 
             backgroundSize: "120%",
             backgroundPosition: 'center top -110px',
             }}>

                <div className=' w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center
                '>
                    <div className='flex flex-col lg:items-start items-center w-full flex-1 lg:pl-12'>
                        <p className='text-white mb-5 lg:mb-4 font-bold text-fontX  lg:text-fontY'>We Have <span className='text-yellow-500'>Excellent</span> <br></br>
                        Of <span className='text-yellow-500'>Quality</span> Pizza</p>
                        {BtnFunction()}
                    </div>

                    <div className='flex items-center justify-center relative h-full flex-1'>
                        <div className='absolute left-0 top-0 w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center'>
                            <img className='absolute w-full' src={img5} alt="img" />
                            <p className='font-extrabold z-10 text-red-600 text-2xl'>25% <br /> <span className='text-black'>off</span></p>
                        </div>
                        <img className='w-3/4 -mb-16 lg:-mb-32 mt-5 lg:mt-12' src={img4} alt="pizza" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Container4;