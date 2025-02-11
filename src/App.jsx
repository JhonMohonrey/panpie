import React from 'react';
import Header from './Header';
import Test from './Test';
import ButtonWithIcon from './ButtonWithIcon';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import Container5 from './Container5';
import Container6 from './Container6';
import Container7 from './Container7';
import Container8 from './Container8';
import Container9 from './Container9';
import Container10 from './Container10';
import Container11 from './Container11';
import Container12 from './Container12';
import Footer from './Footer';

function App(props) {
  const container7Ref = React.useRef(null)
  const [isCount, setIsCount] = React.useState(false)

  const box = (count) => {
    return (
      <div className='bg-green-500 h-96 border-2 border-black text-white text-3xl sm:text-7xl flex items-center justify-center text-center font-extrabold'>
        In progress! {count}
      </div>
    )
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCount(true)
          } else {
            setIsCount(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (container7Ref.current) {
      observer.observe(container7Ref.current); // Observe the Container7 div
    }

    // Cleanup the observer on unmount
    return () => {
      if (container7Ref.current) {
        observer.unobserve(container7Ref.current);
      }
    };

  }, [])

  //Scroll top
  const [scrollTop, setScrollTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll )
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }


  return (
    <div className='relative'>
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <div ref={container7Ref}>
        <Container7 isCount={isCount} />
      </div>
      <Container8 /> 
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Footer />

      {scrollTop ? <button 
        onClick={backToTop}
        className='border-2 bg-red-600 fixed text-white font-extrabold p-3 h-16 w-16 rounded-full bottom-2 right-5 z-50 cursor-pointer active:opacity-80 transition-all duration-300'>Top</button> : null}

      
      {/* <ButtonWithIcon /> */}
      {/* <Test /> */}

      {/* {box(1)}
      {box(2)}
      {box(3)}
      {box(4)} */}
    </div>
  );
}

export default App;