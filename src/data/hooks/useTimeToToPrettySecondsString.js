import { useMemo } from 'react';

// https://stackoverflow.com/a/43466724
export function useTimeToToPrettySecondsString(seconds) {
  return useMemo(() => {
    if (isNaN(seconds)) return '00:00:00';

    const truncatedSeconds = Math.floor(seconds);

    const hours = truncatedSeconds / 60 / 60;
    const remainingMinutes = (truncatedSeconds / 60) % 60;
    const remainingSeconds = truncatedSeconds % 60;

    return `${parseInt(hours)}:${parseInt(remainingMinutes)}:${parseInt(
      remainingSeconds
    )}`.replace(/\b(\d)\b/g, '0$1');
  }, [seconds]);
}
