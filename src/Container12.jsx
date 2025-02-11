import React from 'react';
import img1 from './assets/container12/brand1.png'
import img2 from './assets/container12/brand2.png'
import img3 from './assets/container12/brand3.png'
import img4 from './assets/container12/brand4.png'
import img5 from './assets/container12/brand5.png'
import img6 from './assets/container12/brand6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Container12(props) {
    let dataImage = [
        {
            link: `${img1}`,
        },
        {
            link: `${img2}`,
        },
        {
            link: `${img3}`,
        },
        {
            link: `${img4}`,
        },
        {
            link: `${img5}`,
        },
        {
            link: `${img6}`,
        },
    ]

    const render = () => {
        return (
            dataImage.map((data, i) => {
                return <img 
                className='cursor-pointer hover:opacity-85
                transition-all duration-150 active:opacity-50
                '
                key={i}
                src={data.link} alt="icon" />
            })
        )
    }

    return (
        <div className='
        flex items-center justify-center bg-cover bg-center w-full bg-white py-10'>
            <div className='
            z-30 w-full max-w-screen-2xl flex items-center justify-center
            py-3 lg:py-10 overflow-hidden
            '>

                <div className=' 
                w-full pl-[0.5rem] lg:w-4/5 flex items-center justify-center
                '>
                    {/* {render()} */}
                   
                    <div className='
                        w-4/5 lg:w-full
                    '>
                        
                        <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        breakpoints={{
                            1024: { 
                                slidesPerView: 6,
                                grabCursor: false,
                                loop: false,
                            }
                        }}
                        grabCursor={true}
                        loop={true}
                    >
             
                        <SwiperSlide >
                            <img className="cursor-pointer object-cover  hover:opacity-85 active:opacity-70
                            transition-all duration-300
                            
                            " src={img1} alt="icon" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="cursor-pointer mt-4 object-cover  hover:opacity-85 active:opacity-70
                            transition-all duration-300" src={img2} alt="icon" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="cursor-pointer object-cover hover:opacity-85 active:opacity-70
                            transition-all duration-300 " src={img3} alt="icon" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="cursor-pointer object-cover hover:opacity-85 active:opacity-70
                            transition-all duration-300" src={img4} alt="icon" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="cursor-pointer object-cover hover:opacity-85 active:opacity-70
                            transition-all duration-300" src={img5} alt="icon" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="cursor-pointer mt-4 object-cover hover:opacity-85 active:opacity-70
                            transition-all duration-300" src={img6} alt="icon" />
                        </SwiperSlide>
                    </Swiper>

                    </div>

            
                </div>
       
            </div>
        </div> 
    );
}

export default Container12;