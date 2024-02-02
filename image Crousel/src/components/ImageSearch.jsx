import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  return (
    <div className=" mx-auto text-center py-4">
      <form onSubmit={(e) => {
        e.preventDefault();
        searchText(text)
      }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs "
        />
        <button
          className="btn btn-active btn-secondary mx-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;
