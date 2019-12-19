import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    // Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled
    const [values, setValues] = useLocalStorage("nighttime", true);
    const body = document.querySelector("body");

    useEffect(() => {
        // Import and set up your effect hook
        if(values) {
            // Check to see if the value from useLocalStorage is true or false
            body.classList.add("dark-mode"); // If it's true, add the class dark-mode to the body element
        } else {
            body.classList.remove("dark-mode"); // If it's false, remove the class from the body element
        }
    }, [values])

    // Forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well
    return [values, setValues];
}