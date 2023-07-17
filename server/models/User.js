const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "You must supply an email address"],
      unique: true,
      min: 3,
      max: 30
    },
    password: {
      type: String,
      required: true,
    },
    myCategories: {
      type: Schema.Types.ObjectId, 
      required: false
    }, 
    household: {
        type: Schema.Types.ObjectId,
        required: false,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre("save", async function () {
  const hashed_pass = await bcrypt.hash(this.password, 10);
  this.password = hashed_pass;
});
userSchema.methods.validatePass = async function (unencryted_password) {
  const valid_pass = await bcrypt.compare(unencryted_password, this.password);
  return valid_pass;
};

const User = model("User", userSchema);

module.exports = User;
