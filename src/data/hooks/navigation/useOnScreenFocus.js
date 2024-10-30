import { useEffect } from "react";

export function useOnScreenFocus(navigation, onScreenFocus) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', onScreenFocus);

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
}
