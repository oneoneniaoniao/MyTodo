export const getDateString = (dateObj) => {
  const YYYY = dateObj.getFullYear();
  const MM = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const DD = ("0" + dateObj.getDate()).slice(-2);
  return `${YYYY}/${MM}/${DD}`;
};
