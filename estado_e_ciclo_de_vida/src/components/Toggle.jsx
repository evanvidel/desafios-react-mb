import { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(0);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};
export default Toggle;
