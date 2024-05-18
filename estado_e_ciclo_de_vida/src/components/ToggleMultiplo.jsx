import { useState } from 'react';

const ToggleMultiplo = () => {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
      <p>Você clicou {count}</p>
    </div>
  );
};
export default ToggleMultiplo;
