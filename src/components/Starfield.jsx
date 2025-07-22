import { useEffect, useState } from 'react';

const Starfield = ({ gifUrl = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjVmOGM5ZGQyZjYyYjk2MjBmNjNhYjJkZWEzZjVkZWVhZjQwZGJmNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif" }) => {
  return (
    <div
      id="starfield-bg"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundImage: `url(${gifUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7, // Adjust opacity so text remains readable
      }}
    />
  );
};

export default Starfield; 