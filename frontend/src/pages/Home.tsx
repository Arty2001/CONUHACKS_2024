import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error:any) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default Home;