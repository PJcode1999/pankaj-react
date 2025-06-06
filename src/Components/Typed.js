import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Python Developer','I build.', 'I adapt.','I deliver.'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed
