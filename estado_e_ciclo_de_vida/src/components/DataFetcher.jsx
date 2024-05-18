import { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Olá, os dadoa chegaram...' });
    }, 2000);
  });

  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
};
export default DataFetcher;
