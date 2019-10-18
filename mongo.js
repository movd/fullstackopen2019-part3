const mongoose = require("mongoose").set("useUnifiedTopology", true);

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0-muefh.mongodb.net/phonebook?retryWrites=true`;

mongoose.connect(url, { useNewUrlParser: true });

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
});

const Person = mongoose.model("Person", phonebookSchema);

// Fetch all names and numbers from phonebook
if (process.argv.length === 3 && password) {
  Person.find({}).then(persons => {
    console.log("phonebook:");
    persons.map(p => {
      console.log(p.name, p.number);
    });
    mongoose.connection.close();
  });
}

// Create a new person
if (name && number) {
  const person = new Person({ name, number });

  person.save().then(response => {
    console.log(`added ${person.name} ${person.number} to phonebook`);
    mongoose.connection.close();
  });
}
