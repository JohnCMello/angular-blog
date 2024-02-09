export const getRandomTimestamp = () => {
  const timestamp2020 = new Date('2020-01-01').getTime();
  const todayTimestamp = new Date().getTime();
  const randomOffset = Math.random() * (todayTimestamp - timestamp2020);
  const randomTimestamp = timestamp2020 + randomOffset;
  return new Date(randomTimestamp);
};
