export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

export const isValidDate = (day: string, month: string, year: string): boolean => {
  const dayNum = parseInt(day, 10);
  const monthNum = parseInt(month, 10);
  const yearNum = parseInt(year, 10);

  const daysInMonth: { [key: number]: number } = {
    1: 31,
    2: isLeapYear(yearNum) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return dayNum >= 1 && dayNum <= daysInMonth[monthNum];
};

export const maxValidYear = (year: string): boolean => {
  const maxValidYear = new Date().getFullYear() - 17;

  const yearNum = parseInt(year, 10);
  return yearNum <= maxValidYear;
};