import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () =>
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
