/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// Function to count books
exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({ count });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

// Function to add a new book with capitalized data
exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { title, author } = req.body;

      // Capitalize the title and author
      const capitalizedTitle = title.toUpperCase();
      const capitalizedAuthor = author.toUpperCase();

      // Add the new book to Firestore
      const docRef = await admin.firestore().collection("books").add({
        title: capitalizedTitle,
        author: capitalizedAuthor,
      });

      // Send a response with the added book information
      res.status(200).send({ id: docRef.id, title: capitalizedTitle, author: capitalizedAuthor });
    } catch (error) {
      console.error("Error adding book:", error.message);
      res.status(500).send("Error adding book");
    }
  });
});


