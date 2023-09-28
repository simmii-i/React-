import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const hadleOnline = () => {
      setIsOnline(true);
    };
    const hadleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", hadleOnline);
    window.addEventListener("offline", hadleOffline);

    return () => {
      window.removeEventListener("online", hadleOnline);
      window.removeEventListener("offline", hadleOffline);
    };
  }, []);

  return isOnline; // return true of false
};

export default useOnline;
