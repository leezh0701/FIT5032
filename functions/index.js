const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
const functions = require("firebase-functions");

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message || error);
      res.status(500).send("Error counting books");
    }
  });
});

exports.capitalizeBookDetails = functions.firestore
    .document("books/{bookId}")
    .onCreate((snap, context) => {
      const bookData = snap.data();
      if (!bookData) {
        console.error("No book data available");
        return null;
      }

      const capitalizedData = {
        name: bookData.name ? bookData.name.toUpperCase() : "",
        isbn: bookData.isbn ? bookData.isbn.toString().toUpperCase() : ""
      };

      return snap.ref.set(capitalizedData, {merge: true});
    });
exports.getAllBooks = onRequest(async (req, res) => {
  try {
    const booksCollection = admin.firestore().collection("books");
    const snapshot = await booksCollection.get();
    const books = [];

    snapshot.forEach((doc) => {
      books.push({id: doc.id, ...doc.data()});
    });

    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error.message || error);
    res.status(500).send("Error fetching books");
  }
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const books = [];

      snapshot.forEach((doc) => {
        books.push({id: doc.id, ...doc.data()});
      });

      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error.message || error);
      res.status(500).send("Error fetching books");
    }
  });
});
