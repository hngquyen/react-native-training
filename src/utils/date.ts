export const formatDateFromEpochTime = (epochTime: number): string => {
  if (!epochTime || isNaN(epochTime)) {
    return '';
  }
  const date = new Date(epochTime * 1000); // Convert epoch time to milliseconds
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  return `${day}/${month}/${year}`;
};
