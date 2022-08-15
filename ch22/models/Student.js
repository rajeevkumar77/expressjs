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

// Delete Document
const deleteDocById = async (id) => {
  try {
    const result = await studentModel.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDoc = async (id) => {
  try {
    const result = await studentModel.deleteOne({ _id: id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDocByAge = async (a) => {
  try {
    const result = await studentModel.deleteOne({ age: a });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteManyDoc = async (a) => {
  try {
    const result = await studentModel.deleteMany({ age: a });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { deleteDocById, deleteOneDoc, deleteOneDocByAge, deleteManyDoc };
