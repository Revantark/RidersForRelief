const mongoose = require("mongoose");

const user = new mongoose.Schema({

  phoneNumber: {
    type: Number,
    required: [true, "Phone Number is required"],
    min: 1000000000,
    max: 9999999999,
    validate:{
          validator: (phone)=> {
            var patt = /^[6789]\d{9}$/; return patt.test(phone)
          }
        }
  },
  name: {
      type: String,
      required: [true, "Name is required"],
      minLength: 3,
      maxLength: [40, "Exceeded Characters"]
  }
});


const admin = mongoose.model("admin", user);

module.exports = admin;
