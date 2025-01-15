import React from 'react';
import imgBg from './assets/shape20.png'
import mexican from './assets/maxican.png'
import soft from './assets/soft-drinks.png'
import french from './assets/french.png'
import shapeLeft from './assets/shape18.png'
import shapeRight from './assets/shape19.png'
import { data } from 'autoprefixer';

function Container2(props) {

    const BtnFunction = () => {
        return (
            <button class="flex items-center justify-center gap-2 rounded-full before:ease relative bg-white p-2 px-4 overflow-hidden border-none border-addToCart text-black font-bold shadow-2xl shadow-[#5c2a2a] active:shadow-none transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-addToCart before:duration-200 hover:text-white 
            hover:shadow-[#25252562] hover:before:h-64 hover:before:-translate-y-32 active:opacity-85 mb-4">
                <span class="relative z-10">ORDER NOW</span>
            </button>
        )
    }

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

    let [mainCourse, setMainCourse] = React.useState(
        [
            {
                imgLink: `${mexican}`,
                info: "Mexican Pizza",
                id: "001",
                isOpen: false,
            },
            {
                imgLink: `${soft}`,
                info: "Soft Drinks",
                id: "002",
                isOpen: false,
            },
            {
                imgLink: `${french}`,
                info: "French Fry",
                id: "003",
                isOpen: false,
            },
        ]
    )

    const openBtn = (id) => {
        setMainCourse(prev => {
            return prev.map(data => {
                return data.id === id ? 
                {...data, isOpen: !data.isOpen} : {...data, isOpen: false}
            })
        })
    }

    const box = (imgLink, info) => {
        return mainCourse.map((data, i) => {
            return <div key={i} className='w-72 bg-white relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl'
            onMouseEnter={() => openBtn(data.id)} onMouseLeave={() => openBtn(data.id)}
            >

            <div className={`z-20 absolute top-0 bottom-0 right-0 left-0 duration-200 ease-in-out 
            ${!data.isOpen ? "scale-0" : "scale-100"} `}>
                {hover()}
            </div>

            <div className='  absolute top-0 left-0 right-0 bottom-2/4 z-30 flex items-center justify-center flex-col rounded-2xl'>
                <p className='font-bold text-2xl text-white my-3'>{data.info}</p>

                {/* <button className='border-2 border-yellow-500 text-white font-bold py-2 px-4 rounded-full active:opacity-85 hover:bg-yellow-500 z-50'>SEE MENU</button> */}
                {BtnFunction()}
            </div>

            <div className=' absolute -bottom-10 left-0 right-0 z-10 flex items-center justify-center'>
                <img className='w-4/5' src={data.imgLink} alt="image Photo" />
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
        })
        // return (
        //     <>
        //         <div className='w-72 bg-white relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl'>

        //             <div className='opacity-0 hover:opacity-100 z-20 absolute top-0 bottom-0 right-0 left-0'>
        //                 {hover()}
        //             </div>

        //             <div className='  absolute top-0 left-0 right-0 bottom-2/4 z-30 flex items-center justify-center flex-col rounded-2xl'>
        //                 <p className='font-bold text-2xl text-white my-3'>{info}</p>

        //                 <button className='border-2 border-yellow-500 text-white font-bold py-2 px-4 rounded-full active:opacity-85 hover:bg-yellow-500 z-50'>SEE MENU</button>
        //             </div>

        //             <div className=' absolute -bottom-10 left-0 right-0 z-10 flex items-center justify-center'>
        //                 <img className='w-4/5' src={imgLink} alt="image Photo" />
        //             </div>

        //             <div
        //             className='bg-red-600 rounded-l-full rounded-r-full rounded-tl-2xl rounded-tr-2xl absolute left-0 right-0'>
        //                 <p className='pt-52 opacity-0'>x</p>
        //             </div>
        //             <div 
        //             style={{backgroundImage: `url(${imgBg})`,}}
        //             className='bg-white h-80 rounded-t-3xl'>
        //             </div>
        //         </div>
        //     </>
        // )
    }

    return (
        <div className=' flex items-center justify-center bg-cover bg-center w-full z-10 bg-background relative'>

            <div className='bg-white absolute left-0 right-0 bottom-0 top-0 sm:top-32'></div>

            <div className=' w-full max-w-screen-2xl flex flex-row flex-wrap items-center justify-center gap-5 sm:gap-6 py-16 lg:pb-24 relative'>
                {/* {box(mexican, "Mexican Pizzza")} */}
                {/* {box(soft, "Soft Drinks")} */}
                {/* {box(french, "French Fry")} */}
                {box()}
            </div>
        </div>
    );
}

export default Container2;