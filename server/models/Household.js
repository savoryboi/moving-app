const { Schema, model } = require("mongoose");

const householdSchema = new Schema(
    {
        houseName: {
            type: String,
            required: true,
            min: 3,
            unique: false,
            max: 40

        },

        houseMembers: {
            type: Schema.Types.ObjectId,
            required: true
        },


    }
)