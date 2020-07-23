const formatValue = (value: number): string =>
  Intl.NumberFormat("pt-br").format(value); // TODO

export default formatValue;
