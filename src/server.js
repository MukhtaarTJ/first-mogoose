const http = require("http");
const server = http.createServer();
const connectDB = require("./utils/dbConnect");
const User = require("./models/userModel");

const PORT = 8000;
const userData = {
  username: "Mukhtaar",
  firstName: "Muqtar",
  lastName: "Tijani",
  email: "tijaanimukhtaar@gmail.com",
  DOB: "2020-02-05",
};
const createUser = async () => {
  const user = await User.create(userData);
  if (user) {
    console.log(user);
  } else {
    console.log("something went wrong");
  }
};

// find oneperson
const findOnePerson = async (name) => {
  const person = await User.findOne({ name });
  console.log(person);
};
// find one person by ID

const findOnePersonById = async (id) => {
  const person = await User.findById(id);
  console.log(person);
};

// update person data by id

const updatePerson = async (personData, id) => {
  const updatePerson = await User.findByIdAndUpdate(id, personData);
  console.log(updatePerson);
};

// delete person data by id
const deletePerson = async (id) => {
  return await User.deleteMany(id);
};
findOnePerson("mukhtaar oluwakayode");
findOnePersonById("654e05e7eadc6cecffd428d9");
updatePerson(
  { name: "adedotun mukhtaar", age: 12 },
  "654e05e7eadc6cecffd428d9"
);
deletePerson("654e05e7eadc6cecffd428d9");
createUser();

const startServer = async () => {
  await connectDB();
  server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();
