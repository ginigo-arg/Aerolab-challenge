export const formatCurrency = (number: number) => {
  const currency = Intl.NumberFormat("es-AR");
  return currency.format(number);
};
