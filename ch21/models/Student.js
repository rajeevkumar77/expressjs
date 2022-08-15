import mongoose from "mongoose";

// Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

// Update Document
const updateDocById = async (id) => {
  try {
    const result = await studentModel.findByIdAndUpdate(id, { name: "Sunil" });
    // const result = await studentModel.findByIdAndUpdate(
    //   id,
    //   { name: "Sameer" },
    //   { returnDocument: "after" }
    // );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateoneDoc = async (id) => {
  try {
    const result = await studentModel.updateOne({ _id: id }, { name: "Sujit" });
    // const result = await studentModel.updateOne(
    //   { _id: id },
    //   { name: "Arjun" },
    //   { upsert: true }
    // );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateOneDocByAge = async (a) => {
  try {
    const result = await studentModel.updateOne({ age: a }, { name: "Mouse" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateManyDoc = async (a) => {
  try {
    const result = await studentModel.updateMany(
      { age: a },
      { name: "Dollar" }
    );
    // const result = await studentModel.updateMany(
    //   { age: a },
    //   { name: "Math" },
    //   { upsert: true }
    // );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateDocById, updateoneDoc, updateOneDocByAge, updateManyDoc };
