const Book = require("../models/Book");

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search books by title or author
exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Book.find({
      $or: [
        { title: new RegExp(query, "i") },
        { author: new RegExp(query, "i") }
      ]
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update stock
exports.updateStock = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { stock: req.body.stock }, { new: true });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
