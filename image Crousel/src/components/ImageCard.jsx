import React from "react";

const ImageCard = ({ image }) => {
  const imageTags = () => {
    const tagsArr = image.tags.split(",");
    return tagsArr.map((tags, index) => (
      <span
        key={index}
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 md:mb-0"
      >
        {tags}
      </span>
    ));
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg relative ">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 mb-2">Photo by John Doe</div>

        <ul className="text-sm">
          <li className="mb-2">
            <strong>Views:</strong> {image.views} (4000)
          </li>
          <li className="mb-2">
            <strong>Downloads:</strong> {image.downloads} (500)
          </li>
          <li>
            <strong>Likes:</strong> {image.likes} (600)
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">{imageTags()}</div>
    </div>
  );
};

export default ImageCard;
