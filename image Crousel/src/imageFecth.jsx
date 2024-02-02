import React, { useEffect, useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [id, setId] = useState(1); // Default ID
  const URL = "https://jsonplaceholder.typicode.com/photos";

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/${id}`);
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  //   return () => { };
  // }, []);

  const handleClick = () => {
    // Trigger data fetching when the button is clicked
    fetchData();
  };

  return (
    <>
      <div className="w-full h-20 flex items-center">
        <input
          type="number"
          className="p-4 ring-4 ring-black m-4 text-xl"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          type="submit"
          className="border-4 border-black py-2 px-4 h-fit"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      <img src={imageUrl} alt={`Image for ID ${id}`} />
    </>
  );
};

export default App;
