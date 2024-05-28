import { useState, useEffect } from 'react';

const WindowWidthChecker = () => {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <h3>Largura de tela: {WindowWidth}px</h3>
    </div>
  );
};
export default WindowWidthChecker;
