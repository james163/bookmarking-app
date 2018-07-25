const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateBookmarkInput = require("../../validation/bookmark");

// Bookmark model
const Bookmark = require("../../models/Bookmark");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route   GET api/bookmark/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Bookmark Works" }));

// @route   GET api/bookmark
// @desc    Get bookmark
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Bookmark.find()
      .sort({ date: -1 })
      .then(bookmarks => res.json(bookmarks))
      .catch(err =>
        res.status(404).json({ nopostsfound: "No bookmarks found" })
      );
  }
);

// @route   POST api/bookmark
// @desc    POST bookmark
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBookmarkInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newBookmark = new Bookmark({
      url: req.body.url,
      title: req.body.title,
      shortdesc: req.body.id
    });

    newBookmark.save().then(bookmark => res.json(bookmark));
  }
);

// @route   DELETE api/bookmark/:id
// @desc    Delete bookmark
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Bookmark.findById(req.params.id)
        .then(book => {
          console.log(book);
          // Check for bookmark owner
          if (book.user.toString() !== req.user.id) {
            res.status(401).json({ notauthorized: "User not authorized." });
          }

          //Delete
          book.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ bookmarknotfound: "No Bookmark found." })
        );
    });
  }
);

module.exports = router;
