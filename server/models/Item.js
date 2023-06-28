const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemName: {
        type: String,
        required: [true, "You must provide an item name :)"],
        min: 1,
        max: 100
    }, 
    itemCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category", 
        required: true, 
        min: 1,
        max: 100
    }, 
    itemTag: {
        type: String, 
        required:true, 
        min: 1, 
        max: 20
    }
})

const item = model("Item", itemSchema);

module.exports = item;