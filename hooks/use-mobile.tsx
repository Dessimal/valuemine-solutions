// Import React for using hooks and other React functionalities
import * as React from "react";

// Define the breakpoint for mobile devices
const MOBILE_BREAKPOINT = 768;

// Custom hook to determine if the current screen width is considered "mobile"
export function useIsMobile() {
  // State to store whether the screen is mobile or not
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    // Ensure this effect runs only on the client-side
    if (typeof window === "undefined") return;

    // Create a MediaQueryList object to monitor screen width changes
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Function to update the state based on the current screen width
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Add an event listener to handle screen width changes
    mql.addEventListener("change", onChange);

    // Set the initial state based on the current screen width
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Cleanup the event listener when the component unmounts
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return a boolean indicating whether the screen is mobile
  return !!isMobile;
}
