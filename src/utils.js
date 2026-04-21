export const convertTorupess = (doller) => {
  const currDollerPrice = 93.39;
  const IR = doller * currDollerPrice;
  return IR.toFixed(2);
};
