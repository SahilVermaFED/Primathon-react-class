import { useState, useEffect } from "react";

export const ExampleOne = () => {
  const [data, setData] = useState(null);
  const myCb = () => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors, maybe return a default value or throw an error as needed
      }
    };
    fetchData();
  };

  useEffect(myCb, []);

  return (
    <div>
      {/* Ternary operator { data ? () : () } */}
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
