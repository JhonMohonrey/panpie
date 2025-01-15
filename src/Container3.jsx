import React from 'react';
import img1 from './assets/container3/pro_01.png'
import img2 from './assets/container3/pro_014-400x400.png'
import img3 from './assets/container3/pro_09 (2).png'
import img4 from './assets/container3/pro_02 (1).png'
import img5 from './assets/container3/pro_07 (2).png'
import img6 from './assets/container3/pro_04-400x400.png'
import img7 from './assets/container3/pro_010-400x400.png'
import img8 from './assets/container3/pro_011-400x400.png'

// w-full max-w-screen-2xl

function Container3(props) {

    const BtnFunction = () => {
        return (
            <button class="flex items-center justify-center gap-2 rounded-full before:ease relative bg-red-600 text-white p-2 px-4 overflow-hidden border-none border-red-600 font-bold shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-addToCart before:duration-300 hover:text-white 
            hover:shadow-[#25252562] hover:before:h-64 hover:before:-translate-y-32">
                <span class="relative z-10">ORDER NOW</span>
            </button>
        )
    }

    const textContent = () => {
        return (
            <div className='w-full max-w-screen-2xl flex flex-row flex-wrap items-center justify-center'>
                <div>
                    <p className='text-red-500 text-center font-semibold text-sm'>FRESH FROM PANPIE</p>

                    <p className='text-center font-extrabold mt-1 sm:mt-2 sm:text-3xl text-xl'>
                            We Offer People Best Way <br></br> To Eat Best Food
                    </p>
                </div>
            </div>
        )
    }

    let [dataBtns, setDataBtns] = React.useState(
        [
            {
                name: "ALL",
                id: "all",
                isActive: true,
                state: "all",
            },
            {
                name: "FRIES",
                id: "fries",
                isActive: false,
                state: "fries",

            },
            {
                name: "PIZZA",
                id: "pizza",
                isActive: false,
                state: "pizza",
            },
            {
                name: "DRINKS",
                id: "drinks",
                isActive: false,
                state: "drinks",
            },
            {
                name: "SANDWICH",
                id: "sandwich",
                isActive: false,
                state: "sandwich",
            },
        ]
    )

    const options = () => {

        const activeBtn = (id) => {
            setDataBtns(prev => {
                return prev.map(data => {
                    return data.id !== id ? {...data, isActive: false} : {...data, isActive: true}
                })
            })
        }

        const divContainer = () => {
            return (
                dataBtns.map((data, i) => {
                    return <div key={i} className={`border-[1px] border-[#00000038] p-[5px] px-[24px] rounded-full cursor-pointer ${data.isActive ? "bg-yellow-500 text-white border-none shadow-lg shadow-slate-400" : "bg-none"}`}
                    onClick={() => activeBtn(data.id)}>
                        <p className='font-semibold'>{data.name}</p>
                    </div>
                })
            )
        }

        return (
            <div className=' w-full max-w-screen-2xl flex items-center justify-center py-5 lg:py-8'>

                <div className=' flex gap-2 lg:gap-5 flex-wrap items-center justify-center'>
                    {divContainer()}
                </div>

            </div>
        )
    }


    let [menuData, setMenuData] = React.useState([
        {
            img: `${img1}`,
            title: "Pizza",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "pizza",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$25.00",
            itemPriceB: "$18.00",
            itemPriceC: "$12.00",
            renderState: "pizza",
            index: "z-10",
            viewAll: false,
        },
        {
            img: `${img3}`,
            title: "French Fries",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "pries",
            userSize: "Select",
            itemSizeA: "Double Crust",
            itemSizeB: "Original Crust",
            itemSizeC: "Thick Crust",
            userPrice: "$00.00",
            itemPriceA: "$25.00",
            itemPriceB: "$24.00",
            itemPriceC: "$23.00",
            renderState: "fries",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img4}`,
            title: "BBQ Pizza",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "bbqPizza",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$20.00",
            itemPriceB: "$15.00",
            itemPriceC: "$10.00",
            renderState: "pizza",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img5}`,
            title: "Burger",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "burgerA",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$29.00",
            itemPriceB: "$19.00",
            itemPriceC: "$13.00",
            renderState: "sandwich",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img2}`,
            title: "Coke",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "coke",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$25.00",
            itemPriceB: "$18.00",
            itemPriceC: "$12.00",
            renderState: "drinks",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img7}`,
            title: "Chicken Sandwich",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "burgerB",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$28.00",
            itemPriceB: "$23.00",
            itemPriceC: "$16.00",
            renderState: "sandwich",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img8}`,
            title: "Sandwich",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "burgerC",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$28.00",
            itemPriceB: "$23.00",
            itemPriceC: "$16.00",
            renderState: "sandwich",
            index: "z-10",
            viewAll: false,

        },
        {
            img: `${img6}`,
            title: "Pizza Cheese",
            info: "Lorem ipsum dolor sit consectetur adipisicing Perspiciatis fugiat.",
            isActive: false,
            id: "pizzaB",
            userSize: "Select",
            itemSizeA: "Large",
            itemSizeB: "Medium",
            itemSizeC: "Small",
            userPrice: "$00.00",
            itemPriceA: "$28.00",
            itemPriceB: "$23.00",
            itemPriceC: "$16.00",
            renderState: "pizza",
            index: "z-10",
            viewAll: false,

        },
     
    ])

    const foodOption = () => {

        const chooseBtn = (id, size, price) => {
            setMenuData(prev => {
                return prev.map(data => {
                    return data.id === id ? 
                    {...data, isActive: !data.isActive, userSize: size, userPrice: price, index: "z-50"} : 
                    {...data, isActive: false, index: "z-10"}
                })
            })
        }

        const closeBtn = (id) => {
            setMenuData(prev => {
                return prev.map(data => {
                    return data.id === id ? {...data, isActive: false} : {...data}
                })
            })
        }

        const showAllBtn = (id) => {
            setMenuData(prev => {
                return prev.map(data => {
                    return data.id === id ? 
                    {...data, viewAll: !data.viewAll} : {...data, viewAll: false}
                })
            })
        }


        let stateActive = ""
        const render = () => {
            let options = `bg-white active:shadow-inner active:shadow-slate-500 rounded-full py-[2px] px-2 text-sm cursor-pointer select-none`
            dataBtns.map(data => {
                data.isActive ? stateActive = data.state : data
            })
            
            return menuData.map((data, i) => {
                return <div key={i} className={`border-[1px] bg-inherit hover:bg-[#fff7eb] hover:shadow-2xl shadow-slate-600 cursor-pointer bg-white p-2 sm:p-4 border-[#00000042] w-60 transition-all rounded-xl duration-200 ease-in-out
                    
                    ${data.index}
                ${stateActive === data.renderState || stateActive === "all" ? "scale-100" : "scale-0 absolute"}`} 
                onMouseLeave={() => {
                    setTimeout(() => closeBtn(data.id), 10000)
                    showAllBtn(data.id)
                }} 
                onMouseEnter={() => {
                    showAllBtn(data.id)
                }}
                >
                    
                    <div className={`absolute left-0 right-0 top-0 flex items-center justify-center bottom-1/2 pt-10`}>
                            {/* <button className={`p-3 px-5 rounded-full text-xs font-bold bg-red-600 text-white 
                            active:opacity-85 active:shadow-none shadow-lg shadow-[#0000004d] 
                            duration-200 ease-in-out 
                                ${!data.viewAll ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100 "}
                                `}>
                                VIEW OPTIONS
                            </button> */}
                            <button class={`flex items-center justify-center gap-2 rounded-full before:ease border-none relative bg-red-600 text-white p-2 px-4 overflow-hidden font-bold shadow-2xl shadow-[black] transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-addToCart before:duration-300 hover:text-white 
                            active:shadow-none hover:before:h-64 hover:before:-translate-y-32 duration-200 ease-in-out active:opacity-80 
                            ${!data.viewAll ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100 "}
                            `}>
                                <span class="relative z-10">ORDER NOW</span>
                            </button>
                            {/* {BtnFunction()} */}
                    </div>

                    <div className=' flex items-center justify-center'>
                        <img className='w-full' src={data.img} alt="product" />
                    </div>

                    <div className=''>
                        <p className='font-bold text-xl my-2'>{data.title}</p>
                        <p className='pb-4' >{data.info}</p>
                    </div>

                    <div className=' flex gap-2 items-center relative '>
                        <div className='border-[2px] border-[#808080a1] cursor-pointer px-2 rounded-full relative pr-7 select-none' 
                        onClick={() => chooseBtn(data.id)}>
                            <p className='text-sm font-medium text-gray-600'>{data.userSize ? data.userSize : "Select"}</p>

                            <div className='absolute right-0 top-0 bottom-0 rounded-r-full text-white bg-yellow-500 text-[10px] text-center flex items-center justify-center p-2'>
                            {data.isActive ? "▲" : "▼"}
                            </div>
                        </div>

                        <p className='text-[#d62323] font-extrabold'>{data.userPrice ? data.userPrice : "$00.00"}</p>

                        <div className={`absolute shadow-xl shadow-slate-700 top-8 bg-yellow-500 transition-all duration-50 ease-out rounded-b-xl z-40 flex flex-col gap-2 p-2
                            ${!data.isActive ? "-translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"}`}>
                                <p className={options} onClick={() => chooseBtn(data.id, data.itemSizeA, data.itemPriceA)}>{data.itemSizeA}</p>
                                <p className={options} onClick={() => chooseBtn(data.id, data.itemSizeB, data.itemPriceB)}>{data.itemSizeB}</p>
                                <p className={options} onClick={() => chooseBtn(data.id, data.itemSizeC, data.itemPriceC)}>{data.itemSizeC}</p>
                        </div>

                    </div>
                </div>
            })
        }

        return <div className=' w-full max-w-screen-2xl flex items-center justify-center gap-5 lg:gap-5 flex-wrap pb-8 lg:pb-24'>
            {render()}
        </div>
    }

    return (
        <div  className=' flex flex-col items-center justify-center bg-cover bg-center w-full z-10 bg-white relative pt-1 lg:pt-1'>
            {textContent()}
            {options()}
            {foodOption()}
        </div>
    );
}

export default Container3;

//-translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100 transition-all duration-50 ease-out