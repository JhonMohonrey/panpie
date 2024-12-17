import React from 'react';
import imgBg from './assets/shape20.png'
import mexican from './assets/maxican.png'
import soft from './assets/soft-drinks.png'
import french from './assets/french.png'
import shapeLeft from './assets/shape18.png'
import shapeRight from './assets/shape19.png'

function Container2(props) {

    const hover = () => {
        return (
            <>
                <div className=' absolute z-30 top-0 bottom-0 left-0 right-2/4 flex items-center justify-center'>
                    <img className='mb-10' src={shapeLeft}/>
                </div>
                <div className=' absolute z-20 top-0 bottom-0 left-2/4 right-0 flex items-center justify-center '>
                    <img className='mb-10' src={shapeRight}/>
                </div>
            </>
        )
    }

    const box = (imgLink, info) => {
        return (
            <>
                <div className='border-2 border-black w-72 bg-white relative rounded-2xl overflow-hidden cursor-pointer'>

                    <div className='opacity-0 hover:opacity-100 z-20 absolute top-0 bottom-0 right-0 left-0'>
                        {hover()}
                    </div>

                    <div className='border-2 border-black  absolute top-0 left-0 right-0 bottom-2/4 z-30 flex items-center justify-center flex-col rounded-2xl'>
                        <p className='font-bold text-2xl text-white my-3'>{info}</p>

                        <button className='border-2 border-yellow-500 text-white font-bold py-2 px-4 rounded-full active:opacity-85 hover:bg-yellow-500 z-50'>SEE MENU</button>
                    </div>

                    <div className='border-2 border-black absolute -bottom-10 left-0 right-0 z-10 flex items-center justify-center'>
                        <img className='w-4/5' src={imgLink} alt="image Photo" />
                    </div>

                    <div
                    className='bg-red-600 rounded-l-full rounded-r-full rounded-tl-2xl rounded-tr-2xl absolute left-0 right-0'>
                        <p className='pt-52 opacity-0'>x</p>
                    </div>
                    <div 
                    style={{backgroundImage: `url(${imgBg})`,}}
                    className='bg-white h-80 rounded-t-3xl'>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='border-2 border-black flex items-center justify-center bg-cover bg-center w-full z-10 '>
            <div className='border-2 border-black bg-background w-full  max-w-screen-2xl flex flex-row flex-wrap items-center justify-center gap-3 py-5'>
                {box(mexican, "Mexican Pizzza")}
                {box(soft, "Soft Drinks")}
                {box(french, "French Fry")}
            </div>
        </div>
    );
}

export default Container2;