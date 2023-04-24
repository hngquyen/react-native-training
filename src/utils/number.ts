export const formatNumberWithCommas = (num: number): string => {
  const parts = num.toFixed(2).split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const decimalPart = parts[1] || '00';
  return `${integerPart}.${decimalPart}`;
};
