import { useState } from "react";

function Image({ src, className, animationClass }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  return (
    <img
      onLoad={handleLoad}
      className={`${className} ${isLoaded ? animationClass : ""}`}
      src={src}
    />
  );
}

export default Image;
