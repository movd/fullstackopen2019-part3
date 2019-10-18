const mongoose = require("mongoose").set("useUnifiedTopology", true);
const { MONGODB_URI } = process.env;

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
});

phonebookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Person", phonebookSchema);
