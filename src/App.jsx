import React from 'react';
import Header from './Header';
import Test from './Test';
import ButtonWithIcon from './ButtonWithIcon';
import Container1 from './Container1';
import Container2 from './Container2';

function App(props) {
  return (
    <div>
      <Header />
      <Container1 />
      <Container2 />
      {/* <ButtonWithIcon /> */}
      {/* <Test /> */}
      <div className='bg-green-500 h-96 border-2 border-black text-white text-3xl text-center '>1</div>
      <div className='bg-green-500 h-96 border-2 border-black text-white text-3xl text-center'>2</div>
      <div className='bg-green-500 h-96 border-2 border-black text-white text-3xl text-center'>3</div>
    </div>
  );
}

export default App;