const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  searchBooks,
  updateStock,
} = require("../controllers/bookController");

router.post("/", createBook);
router.get("/", getBooks);
router.get("/search", searchBooks);
router.put("/:id/stock", updateStock);

module.exports = router;
