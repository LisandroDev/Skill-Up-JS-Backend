exports.transactions = {
  categoryId: {
    exists: {
      errorMessage: "Category is required",
      options: { checkFalsy: true },
    },
    notEmpty: {
      errorMessage: "Category Id is empty",
    },
    isInt: {
      errorMessage: "Category Id must be an integer/number",
    },
  },
  amount: {
    exists: { errorMessage: "Amount is required" },
    isNumeric: { errorMessage: "Amount should be a float" },
    notEmpty: {
      errorMessage: "Amount is empty",
    },
  },
};
