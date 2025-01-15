import React from 'react';
import Header from './Header';
import Test from './Test';
import ButtonWithIcon from './ButtonWithIcon';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';

function App(props) {

  const box = (count) => {
    return (
      <div className='bg-green-500 h-96 border-2 border-black text-white text-3xl sm:text-7xl flex items-center justify-center text-center font-extrabold'>
        In progress! {count}
      </div>
    )
  }

  return (
    <div>
      <Header />
      {/* <Container1 /> */}
      {/* <Container2 /> */}
      {/* <Container3 /> */}
      <Container4 />
      
      {/* <ButtonWithIcon /> */}
      {/* <Test /> */}

      {box(1)}
      {box(2)}
      {box(3)}
      {box(4)}
    </div>
  );
}

export default App;