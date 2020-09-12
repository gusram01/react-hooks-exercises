import React, { useEffect } from 'react';
import { useState } from 'react';

const Message = () => {

  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  })


  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener('mousemove', mouseMove);


    return () => {
      console.log('unmounted component');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <>
      <h3>Awesome</h3>
      <p>X: {coords.x}</p>
      <p>Y: {coords.y}</p>
    </>
  );
};

export default Message;
