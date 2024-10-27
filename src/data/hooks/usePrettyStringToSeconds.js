export function usePrettyStringToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.padStart(8, '00:').split(':');

  const hoursInSeconds = parseInt(hours) * 60 * 60;
  const minutesInSeconds = parseInt(minutes) * 60;

  return hoursInSeconds + minutesInSeconds + parseInt(seconds);
}
