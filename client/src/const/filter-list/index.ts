export interface IMenuSelect {
  name: string;
  value: string;
}

export const priceSelected: IMenuSelect[] = [
  { name: "Dưới 120.000 VND", value: "0_120" },
  { name: "120.000 VND - 500.000 VND", value: "120_500" },
  { name: "500.000 VND - 700.000 VND", value: "500_700" },
  { name: "Trên 700.000 VND", value: "700_i" },
];

export const sizeSelected: IMenuSelect[] = [
  { name: "36", value: "36" },
  { name: "37", value: "37" },
  { name: "38", value: "38" },
  { name: "39", value: "39" },
  { name: "40", value: "40" },
  { name: "41", value: "41" },
  { name: "42", value: "42" },
];

export const genderSelected: IMenuSelect[] = [
  { name: "nam", value: "male" },
  { name: "nữ", value: "female" },
];
