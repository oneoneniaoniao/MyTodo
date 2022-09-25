const getDate = (dateObj) => {
  const YYYY = dateObj.getFullYear();
  const MM = dateObj.getMonth() + 1;
  const DD = dateObj.getDate();
  return `${YYYY}/${MM}/${DD}`;
};

export default getDate;
