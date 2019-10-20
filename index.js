require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());

// Login Setup using Morgan
// Create custom token: Return POST Body
morgan.token("postBody", (req, res) => {
  if (req.method == "POST") {
    return JSON.stringify(req.body);
  }
});

const loggerFormat =
  ":method :url :status :res[content-length] - :response-time ms :postBody";

app.use(morgan(loggerFormat));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/info", (req, res) => {
  const timestamp = new Date();

  res.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${timestamp}</p>`
  );
});

app.get("/api/persons", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(p => p.toJSON()));
  });
});

app.post("/api/persons", (req, res) => {
  let body = req.body;
  if (!body.name) {
    return res.status(400).json({ error: "name must be given" });
  }

  if (!body.number) {
    return res.status(400).json({ error: "number must be give" });
  }

  const person = new Person({ name: body.name, number: body.number });

  person.save().then(savedPerson => {
    res.json(savedPerson.toJSON());
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then(p => {
      if (p) {
        res.json(p.toJSON());
        console.log(p.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === "CastError" && error.kind === "ObjectId") {
    return res.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

// handler of requests with result to errors
app.use(errorHandler);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
