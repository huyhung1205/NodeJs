const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

const FILE_PATH = "notes.json";

// Đọc ghi chú từ file
const loadNotes = () => {
  if (fs.existsSync(FILE_PATH)) {
    return JSON.parse(fs.readFileSync(FILE_PATH));
  }
  return [];
};

// Lưu ghi chú vào file
const saveNotes = (notes) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
};

// API lấy danh sách ghi chú
app.get("/notes", (req, res) => {
  res.json(loadNotes());
});

// API thêm ghi chú
app.post("/notes", (req, res) => {
  const notes = loadNotes();
  const newNote = { id: Date.now(), text: req.body.text };
  notes.push(newNote);
  saveNotes(notes);
  res.json(newNote);
});

// API xóa ghi chú
app.delete("/notes/:id", (req, res) => {
  let notes = loadNotes();
  notes = notes.filter((note) => note.id !== parseInt(req.params.id));
  saveNotes(notes);
  res.sendStatus(200);
});

// Trả về file giao diện
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname));
app.listen(4000, () => console.log("Server chạy trên http://localhost:4000"));
