import React from 'react';
import img1 from './assets/container9/burger.jpeg'
import img2 from './assets/container9/drinks.jpeg'
import img3 from './assets/container9/pizza.jpeg'

function Container9(props) {
    let [pic, setPic] = React.useState([
        {
            text: "Pizza",
            img: `${img3}`,
        },
        {
            text: "Drinks",
            img: `${img2}`,
        },
        {
            text: "Chicken",
            img: `${img1}`,
        },
    ])

    const render = () => {
        return (
            pic.map((data, key) => {
                return <div key={key} 
                className=' overflow-hidden flex items-center justify-center w-11/12
                cursor-pointer rounded-xl group relative
                '>
                    <img  className="transition-all duration-300 group-hover:scale-110 " src={data.img} alt="images" />

                    <p className='absolute font-bold text-2xl mb-1 lg:text-5xl lg:mb-3 text-center italic select-none text-white'>
                        {data.text}
                    </p>
                </div>
            })
        )
    }

    return (
        <div className='flex items-center justify-center bg-cover bg-center w-full '>
            <div className='z-30 w-full max-w-screen-2xl flex items-center justify-center
            flex-col sm:flex-row sm:p-0 gap-3 lg:gap-5 mb-5 lg:mb-10
            '>
                {render()}
            </div>
        </div> 
    );
}

export default Container9;