const { ErrorObject } = require("../helpers/error");

const ownership = async (req, res, next) => {
  try {
    const { id, roleId } = req.user;

    if (Number(roleId) === 1) {
      return next();
    } else {
      res.status(403).send("You do not have the necessary permissions");
      throw new ErrorObject("Restricted", 403);
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

module.exports = ownership;
