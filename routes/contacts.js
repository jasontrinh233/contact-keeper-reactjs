const express = require("express");
const router = express.Router();
const colors = require("colors");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get("/", auth, async (req, res) => {
   try {
      const contacts = await Contact.find({ user: req.user.id }).sort({
         date: -1
      });
      return res.status(200).json(contacts);
   } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: "Server error" });
   }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
   "/",
   [
      auth,
      [
         check("name", "Name is required")
            .not()
            .isEmpty()
      ]
   ],
   async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ msg: errors.array() });
      }

      const { name, email, phone, type } = req.body;

      try {
         const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
         });

         const contact = await newContact.save();
         return res.status(201).json(contact);
      } catch (err) {
         console.error(err.message);
         return res.status(500).json({ msg: "Server error" });
      }
   }
);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put("/:id", (req, res) => {
   res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Update contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
   try {
      const contact = await Contact.findById(req.params.id);

      if (!contact) return res.status(404).json({ msg: "Contact not found" });

      // make sure user owns contact
      if (contact.user.toString() !== req.user.id) {
         return res.status(401).json({ msg: "Not authorized" });
      }

      // delete contact
      await Contact.findByIdAndRemove(req.params.id);
      return res.status(200).json({ msg: "Contact removed" });
   } catch (err) {
      console.error(err.message.red);
      return res.status(500).json({ msg: "Server error" });
   }
});

module.exports = router;
