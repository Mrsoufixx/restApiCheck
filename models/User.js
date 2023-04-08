const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
      type:String,
      required:true
},
  age: {
      type:Number,
      required:true,
      min:10,
      max:80,
},
  email: {
      type:String,
      required:true,
      unique:true,
},
  hobbies: [String],
});

const User = model("User", userSchema);

// User.create([
//   {
//     name: "Alice",
//     age: 25,
//     email: "alice@example.com",
//     hobbies: ["reading", "hiking"],
//   },

//   {
//     name: "Bob",
//     age: 30,
//     email: "bob@example.com",
//     hobbies: ["swimming", "running", "cooking"],
//   },

//   {
//     name: "Charlie",
//     age: 20,
//     email: "charlie@example.com",
//     hobbies: ["painting", "playing guitar"],
//   },
//   {
//     name: "John",
//     age: 28,
//     email: "john@example.com",
//     hobbies: ["playing soccer", "reading", "traveling"],
//   },

//   {
//     name: "Emily",
//     age: 24,
//     email: "emily@example.com",
//     hobbies: ["painting", "yoga", "hiking"],
//   },

//   {
//     name: "David",
//     age: 35,
//     email: "david@example.com",
//     hobbies: ["playing guitar", "watching movies"],
//   },

//   {
//     name: "Sophia",
//     age: 19,
//     email: "sophia@example.com",
//     hobbies: ["dancing", "cooking", "reading"],
//   },

//   {
//     name: "Michael",
//     age: 42,
//     email: "michael@example.com",
//     hobbies: ["playing golf", "watching sports"],
//   },

//   {
//     name: "Olivia",
//     age: 27,
//     email: "olivia@example.com",
//     hobbies: ["photography", "hiking"],
//   },

//   {
//     name: "Benjamin",
//     age: 31,
//     email: "benjamin@example.com",
//     hobbies: ["playing tennis", "watching movies"],
//   },

//   {
//     name: "Ava",
//     age: 22,
//     email: "ava@example.com",
//     hobbies: ["singing", "reading", "traveling"],
//   },

//   {
//     name: "William",
//     age: 29,
//     email: "william@example.com",
//     hobbies: ["playing basketball", "listening to music"],
//   },

//   {
//     name: "Mia",
//     age: 26,
//     email: "mia@example.com",
//     hobbies: ["baking", "yoga"],
//   },
// ]);

module.exports = User;
