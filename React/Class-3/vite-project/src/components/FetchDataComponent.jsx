import { useState, useEffect } from "react";

const FetchDataComponent = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Data has loaded with first name: {data[0].name}</p>
      ) : (
        <p>Data is loading............</p>
      )}
    </div>
  );
};

export default FetchDataComponent;
