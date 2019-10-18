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

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
];

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
  let person = req.body;

  if (!person.name) {
    return res.status(400).json({ error: "name must be given" });
  }

  if (!person.number) {
    return res.status(400).json({ error: "number must be give" });
  }

  if (persons.find(p => p.name === person.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  let randomId = Math.floor(Math.random() * 900000) + 100000;
  person = { ...person, id: randomId };
  console.log(person);

  persons = persons.concat(person);

  res.json(person);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(p => p.id !== id);
  res.status(204).end();
});

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
