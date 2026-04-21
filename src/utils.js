export const convertTorupess = (doller) => {
  const currDollerPrice = 93.39;
  const IR = doller * currDollerPrice;
  return IR.toFixed(2);
};

export const findOutAllCategory = (array) => {
  const category = Array.from(
    new Map(
      array?.map((value) => [
        value.category,
        { category: value.category, id: value.id },
      ]),
    ).values(),
  );

  return category;
};
