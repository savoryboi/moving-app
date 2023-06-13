const { Schema, model } = require("mongoose");
const Item = require('./Item');

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 40
    },
    categoryItems: {
        type: [Schema.Types.ObjectId],
        ref: "Item",
        required: false
    }
});

const category = model("Category", categorySchema);

module.exports = category;




