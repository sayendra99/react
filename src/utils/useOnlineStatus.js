import {useEffect,useState} from "react";
// Custom hook 
const useOnlineStatus=
()=>
    {
        const [onlinestatus,Setonlinestatus]=useState(true);
// our task if the web app is online it would loads all cards ,So to do like that we need to consider window's network status

//Now we are going change the behaviour of component by tracking and We useEffect hook to define the behaviour of component

useEffect(() => {
    // Function to set status to true when online
    const handleOnline = () => {
      Setonlinestatus(true);
    };

    // Function to set status to false when offline
    const handleOffline = () => {
      Setonlinestatus(false);
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return onlinestatus;
    };
export default useOnlineStatus;