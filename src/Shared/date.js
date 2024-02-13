export const dateConvertor = (dateTime) => {
  const dateObj = new Date(dateTime);
  const year = dateObj.getFullYear();
  const mon = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const hour = dateObj.getHours();
  const min = String(dateObj.getMinutes()).padStart(2, 0);

  return `${year}.${mon}.${date} ${hour}:${min}`;
};
