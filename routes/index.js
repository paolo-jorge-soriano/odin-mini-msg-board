const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Looking forward to it!",
    user: "Denise",
    added: new Date(),
  },
  {
    text: "How are you?",
    user: "Bob",
    added: new Date(),
  },
];

// GET - HTML templates
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "Add a Message" });
});

router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];

  if (message) {
    res.render("message", { title: "Message Details", message: message, messageId: messageId });
  } else {
    res.status(404).send("Error: Message not found.");
  }
});

// POST - new message
router.post("/new", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
