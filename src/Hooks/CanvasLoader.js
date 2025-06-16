// 👇 Place this INSIDE the same file for now (below Home)

import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const CanvasLoader = ({ setIsLoading }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setIsLoading(false); // ✅ Notify parent when done
    }
  }, [progress]);

  return null;
};
