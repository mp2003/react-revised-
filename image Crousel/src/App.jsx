import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const pixbayKey = import.meta.env.VITE_REACT_APP_PIXBAY_API_KEY;
  // console.log(pixbayKey);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${pixbayKey}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.error(err));
  }, [term]);

  console.log(term);
  return (
    <div className="container mx-auto p-4">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="mx-auto">
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App