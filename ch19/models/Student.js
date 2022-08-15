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

const createDoc = async () => {
  try {
    // Creating New Document
    const studentDoc = new studentModel({
      name: "Rahul",
      age: 25,
      fees: 8500.4,
      hobbies: ["dancing", "racing"],
      isactive: true,
      comments: [{ value: "This is good" }],
    });
    // Saving Document
    const result = await studentDoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// const createDoc = async (nm, ag, fe, hob, isact, comt) => {
//  try {
//   // Creating New Document
//   const studentDoc = new studentModel({
//    name: nm,
//    age: ag,
//    fees: fe,
//    hobbies: hob,
//    isactive: isact,
//    comments: comt
//   })
//   // Saving Document
//   const result = await studentDoc.save()
//   console.log(result)
//  } catch (error) {
//   console.log(error)
//  }
// }

const createMultiDoc = async () => {
  try {
    // Creating New Document
    const pritiDoc = new studentModel({
      name: "Priti",
      age: 25,
      fees: 8500.4,
      hobbies: ["dancing", "racing"],
      isactive: true,
      comments: [{ value: "This is good" }],
    });
    const kabirDoc = new studentModel({
      name: "Kabir",
      age: 21,
      fees: 8700.4,
      hobbies: ["dancing", "racing"],
      isactive: true,
      comments: [{ value: "This is good" }],
    });
    const jayDoc = new studentModel({
      name: "Jay",
      age: 27,
      fees: 8400.4,
      hobbies: ["dancing", "racing"],
      isactive: true,
      comments: [{ value: "This is good" }],
    });
    // Saving Document
    const result = await studentModel.insertMany([pritiDoc, kabirDoc, jayDoc]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { createDoc, createMultiDoc };
