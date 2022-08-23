const formatter = new Intl.NumberFormat("en-US", {
  currency: "VND",
  style : "currency"
});
export function priceConvert(price: string | number) {
  const priceConvert = formatter.format(Number(price));
  return priceConvert;
}
