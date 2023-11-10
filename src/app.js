// find oneperson
const findOnePerson = async (name) => {
  const person = await Person.findOne({ name });
  console.log(person);
};
// find one person by ID

const findOnePersonById = async (id) => {
  const person = await Person.findById(id);
  console.log(person);
};

// update person data by id

const updatePerson = async (personData, id) => {
  const updatePerson = await Person.findByIdAndUpdate(id, personData);
  console.log(updatePerson);
};

// delete person data by id
const deletePerson = async (id) => {
  return await Person.deleteMany(id);
};
findOnePerson("mukhtaar oluwakayode");
findOnePersonById("654e05e7eadc6cecffd428d9");
updatePerson(
  { name: "adedotun mukhtaar", age: 12 },
  "654e05e7eadc6cecffd428d9"
);
deletePerson("654e05e7eadc6cecffd428d9");
createNewPerson();

module.exports = app;
