import React from 'react';
import bgImage from './assets/container7/9389.png'
import img1 from './assets/container7/experience.png'
import img2 from './assets/container7/expertise.png'
import img3 from './assets/container7/heart (1).png'
import img4 from './assets/container7/ingredient.png'
import CountUp from 'react-countup';

// Yes, you can detect if Container7 is visible on the screen by using Intersection Observer API in modern web development or by manually calculating its position using the DOM's bounding box properties. Here's an overview of both approaches:

// Target the element
// const container7 = document.querySelector('#container7');

// // Create the observer
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log('Container7 is visible on the screen!');
//         // Perform any action here
//       } else {
//         console.log('Container7 is not visible.');
//       }
//     });
//   },
//   { threshold: 0.1 } // Adjust threshold as needed (e.g., 0.1 means 10% visibility)
// );

// // Observe the element
// observer.observe(container7);

// 1. Using Intersection Observer API (Recommended)
// 2. Using getBoundingClientRect()

// Which Approach Should You Use?
// Intersection Observer API: Best for performance and scenarios where you need to detect visibility changes over time (e.g., lazy loading, animations, etc.).
// getBoundingClientRect(): Best for one-off checks or quick solutions but can be inefficient if used repeatedly (e.g., in a scroll event without throttling/debouncing).
// Let me know if you need help implementing either!

function Container7(props) {
    let [size, setSize] = React.useState(0)
    
    React.useEffect(() => {
        const handle = () => {
            setSize(window.scrollY)
        }

        window.addEventListener("scroll", handle)
        return () => window.removeEventListener("scroll", handle)
    }, [])

    let data = [
        {
            icon: `${img1}`,
            name: "Ingredients",
            num: 105,
        },
        {
            icon: `${img2}`,
            name: "Clients Daily",
            num: 600,
        },
        {
            icon: `${img4}`,
            name: "Years of Experience",
            num: 50,
        },
        {
            icon: `${img3}`,
            name: "Fresh & Halal",
            num: 100,
        },
    ]
    

    const render = () => {
        return data.map((data, key) => {
            let counting = !props.isCount ? <p>0</p> : <CountUp start={0} end={data.num} duration={3} separator="," prefix="" />
            return <div key={key} className='flex flex-col gap-5 items-center' >
                <img className='w-20' src={data.icon} alt="image" />
                <p className='text-white font-bold text-5xl lg:text-6xl text-center'>
                    {counting}
                </p>
                <p className='text-white text-nowrap text-sm lg:text-md text-center'>
                    {data.name}
                </p>
            </div>
        })
    }

    return (
        <div className='flex items-center justify-center bg-cover bg-center w-full z-10 relative '>

            <div style={{backgroundImage: `url(${bgImage})`, }} className='absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center bg-fixed'>
            </div>
            
            <div className='absolute top-0 bottom-0 right-0 left-0 bg-[#00000085]'>
            </div>

            <div className='z-30 w-full max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:px-28 gap-14 lg:gap-0 py-14 lg:py-28'>
                {render()}
            </div>
            
        </div>
    );
}

export default Container7;