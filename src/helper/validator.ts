import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const isValidDate = (day: string, month: string, year: string): boolean => {
  const dateString = `${year}-${month}-${day}`;

  const isValid = dayjs(dateString, "YYYY-MM-DD", true).isValid();

  return isValid;
};

export const maxValidYear = (year: string): boolean => {
  const maxValidYear = dayjs().year() - 17;
  const yearNum = parseInt(year, 10);
  
  return yearNum <= maxValidYear;
};