const DateFormat = (ts) => {
  var date = new Date(ts).toLocaleDateString("bg-BG");
  return date;
};

export default DateFormat;
