export const isValidDate = (day: string, month: string, year: string): boolean => {
  const paddedMonth = month.padStart(2, "0");
  const paddedDay = day.padStart(2, "0");
  const dateString = `${year}-${paddedMonth}-${paddedDay}`;

  const date = new Date(dateString);

  const isValid = (
    date.getFullYear() === parseInt(year, 10) &&
    (date.getMonth() + 1) === parseInt(month, 10) &&
    date.getDate() === parseInt(day, 10)
  );

  return isValid;
};

export const maxValidYear = (year: string): boolean => {
  const currentYear = new Date().getFullYear();
  const maxValidYear = currentYear - 17;
  const yearNum = parseInt(year, 10);
  
  return yearNum <= maxValidYear;
};