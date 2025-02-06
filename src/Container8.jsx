import React from 'react';
import testimonial from './assets/Container8/testimonial-client.png'
import chili from './assets/Container8/chilli5 (1).png'
import leaves from './assets/Container8/leave5.png'
import topRight from './assets/Container8/shape32.png'
import bottomLeft from './assets/Container8/shape31.png'

//Default Container
{/* <div className='border-2 border-black flex items-center justify-center bg-cover bg-center w-full'>
<div className='border-2 border-black z-30 w-full max-w-screen-2xl flex items-center justify-center'>
    this is default Container
</div>
</div> */}

function Container8(props) {
    const [offsetY, setOffsetY] = React.useState(0);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    let [clientCount, setClientCount] = React.useState(0)
    let [dots, setDots] = React.useState([
      {
        isActive: false,
        id: 0,
      },
      {
        isActive: true,
        id: 1,
      },
      {
        isActive: false,
        id: 2,
      },
    ])
    let [clientData, setClientData] = React.useState([
      {
        info: "The pizza here is absolutely delicious! The crust is always perfectly crispy, and the toppings are fresh. I keep coming back for more!",
        clientName: "Sofia Martinez",
        position: "Registered Nurse",
        isShow: false,
        id: 0,
      },
      {
        info: "I love the variety of options available. Whether I'm craving something classic or looking to try something new, this pizza place never disappoints!",
        clientName: "Emma Rose Williams",
        position: "Data Analyst",
        isShow: true,
        id: 1,
      },
      {
        info: "Service was quick and friendly, and the pizza was hot and flavorful. Definitely my go-to spot for a satisfying meal!",
        clientName: "Ethan Thompson",
        position: "Construction Manager",
        isShow: false,
        id: 2,
      },
    ])

    const nextBtn = () => {
      setClientCount(prev => {
        prev ++
        return prev > clientData.length -1 ? prev = 0 : prev
      })

      console.log("current test", clientCount)
      
      setClientData(prev => {
        return prev.map((data) => {
          return data.id === clientCount ? {...data, isShow: !data.isShow} : {...data, isShow: false}
        })
      })

      setDots(prev => {
        return prev.map(data => {
          return data.id === clientCount ? {...data, isActive: !data.isActive} : {...data, isActive: false}
        })
      })
    }

    const renderClient = () => {
      return (
        clientData.map((data, i) => {
          return data.isShow ? <div key={i} className='w-11/12 lg:w-96 '>
            <p className='text-gray-500 italic select-none'>" {data.info} "</p>
            <p className='font-bold mt-5 text-xl select-none'>{data.clientName}</p>
            <p className='text-gray-500 text-sm select-none'>{data.position}</p>
          </div> : null
        })
      )
    }

    const renderDots = () => {
      return (
        dots.map((data, i) => {
          return <div key={i} className={`rounded-full py-2 ${data.isActive ? "px-4 bg-red-600" : "px-2 opacity-80 bg-gray-500"} transition-all duration-300`}>
          </div>
        })
      )
    }

    return (
        <div className=' flex items-center justify-center bg-cover relative bg-center w-full'>
          <img className='absolute w-80 hidden lg:block opacity-50 right-0 top-0' src={topRight} />
          <img className='absolute w-80 hidden lg:block opacity-50 left-0 bottom-0' src={bottomLeft} />

            <div className=' z-30 w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center gap-8 my-14'>

  

                <div className=' flex items-center justify-center relative'>
                    <img className='opacity-100' src={testimonial} alt="image"/>

                    <img
                      className="absolute sm:w-36 w-24 lg:left-8 lg:bottom-16 left-0 bottom-5 -z-10 slight-rotate-animation"
                      src={chili}
                      alt="image"
                    />
                    {/* <img className='absolute sm:w-36 w-24 lg:left-8 lg:bottom-16 left-0 bottom-5 -z-10' src={chili} alt="image" /> */}
                    <img
                     className='absolute sm:w-20 w-16 lg:right-8 lg:bottom-16 right-0 bottom-5 -z-10
                     slight-rotate-animation
                     ' 
                     src={leaves} 
                     alt="image" 
                    />
                </div>

                <div className='flex flex-col items-center lg:items-start'>
                  <p className='text-red-600 font-bold text-sm text-center lg:text-left'>TESTIMONIALS</p>
                  <p className='font-bold text-2xl lg:text-3xl text-center lg:text-left mb-5 lg:mb-7'>What Our Client Says</p>

                  {renderClient()}
                  <div className='flex gap-1 mt-5 lg:mt-8 items-center'>
                    {renderDots()}
                  <button
                  className='ml-2 text-white active:opacity-80  px-2 p-1  bg-red-600 rounded-full transition-all duration-100 select-none shadow-md active:shadow-none shadow-black'
                  onClick={nextBtn}>&#10140;</button>
                  </div>
                </div>

            </div>
        </div>
    );
}

export default Container8;