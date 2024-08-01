export const currencyConversion = (locale: string = "id-ID", currency: string = "IDR", value: number): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: 0
  }).format(value);
};

export const formatLongDate = (locale: string = "id-ID", date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};