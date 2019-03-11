export const sirenMask = [
  ...Array(3).fill(/\d/),
  ' ',
  ...Array(3).fill(/\d/),
  ' ',
  ...Array(3).fill(/\d/)
];

export const siretMask = [...sirenMask, ' ', ...Array(5).fill(/\d/)];
