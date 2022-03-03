import { useState } from 'react';

import missingno from 'assets/images/MissingNo.png';

function Image({ onLoad, alt, src, className, animationClass }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad({ success: true });
  };

  const handleError = () => {
    setImage(missingno);
    onLoad({ success: false });
  };

  return (
    <img
      onLoad={handleLoad}
      onError={handleError}
      className={`${className} ${isLoaded ? animationClass : ''}`}
      src={image}
      alt={alt}
    />
  );
}

export default Image;
