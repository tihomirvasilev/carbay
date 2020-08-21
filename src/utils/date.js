const DateFormat = (ts) => {
  var date = new Date(ts).toLocaleDateString("bg-BG");
  return date;
};

const generateYearsTillNow = (startYear, setState) => {
  let years = [];
  let date = new Date();
  const lastYear = date.getFullYear();

  for (let i = startYear; i <= lastYear; i++) {
    years.push(i);
  }
  setState(years);
};

const func = {
  DateFormat,
  generateYearsTillNow,
};
export default func;
