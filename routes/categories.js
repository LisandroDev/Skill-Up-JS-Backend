const express = require("express");
const {
  createCategory,
  getCategories,
  getCategoryById,
  modifyCategory,
  deleteCategory,
} = require("../controllers/categories");
const getToken = require("../helpers/getToken");
const ownership = require("../middlewares/ownership");

const router = express.Router();

router.post("/", getToken, ownership, createCategory);

router.get("/", getToken, getCategories);

router.put("/:id", getToken, ownership, modifyCategory);

router.delete("/:id", getToken, ownership, deleteCategory);

module.exports = router;
