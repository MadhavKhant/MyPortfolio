import { useState, useEffect } from "react";

const useAdjustIslandForScreenSize = () => {
  // State to hold screen properties: position, scale, and rotation
  const [screenProps, setScreenProps] = useState({
    ScreenPosition: [0, -9.5, -43],
    ScreenScale: window.innerWidth < 768 ? [0.2, 0.2, 0.2] : [1, 1, 1],
    rotation: [0.1, 4.7, 0]
  });

  // Function to adjust scale based on screen width
  const adjustScreenScale = () => {
    setScreenProps(prevProps => ({
      ...prevProps,
      ScreenScale: window.innerWidth < 768 ? [0.6, 1, 0.6] : [1, 1, 1],
      ScreenPosition: window.innerWidth < 768 ? [0, -5, -40] : [0, -9.5, -43]
    }));
  };

  useEffect(() => {
    // Run the function initially to set the correct scale
    adjustScreenScale();

    // Add event listener to adjust scale on window resize
    window.addEventListener("resize", adjustScreenScale);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", adjustScreenScale);
  }, []);

  return screenProps;
};

export default useAdjustIslandForScreenSize;
