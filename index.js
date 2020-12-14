const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.static("src"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");

    app.listen(port, () => console.log(`Listening on port ${port}...`));
  }
);

const Entry = require("./schemas/entries");

app.post("/entries", (req, res) => {
  console.log(req.body.id)

  Entry.create(
    {
      title: req.body.title,
      entry: req.body.entry,
      grateful: req.body.grateful,
      rating: req.body.rating,
      date: req.body.date,
    },
    (err, entries) => {
      if (err) console.log(err);

      Entry.find((err, entries) => {
        if (err) console.log(err);

        res.json(entries);
      });
    }
  );
});

app.get("/entries", (req, res) => {
  Entry.find((err, entries) => {
    if (err) console.log(err);

    res.json(entries);
  });
});

app.put("/entries/:id", (req, res) => {
  Entry.findById(req.params.id, (err, entry) => {
    entry.update(req.query, (err, entries) => {
      if (err) console.log(err);

      Entry.find((err, entries) => {
        if (err) console.log(err);

        res.json(entries);
      });
    });
  });
});

app.delete("/entries/:id", (req, res) => {

  console.log('HERE IS ID',req.params.id)

  Entry.remove(
    {
      _id: req.params.id,
    },
    (err, entries) => {
      if (err) console.log(err);
      Entry.find((err, entries) => {
        if (err) console.log(err);
        res.json(entries);
      });
    }
  );
});
