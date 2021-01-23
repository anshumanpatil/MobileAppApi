const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Day = new Schema(
    {
        phNumber: {
            type: String
        },
        callType: {
            type: String
        },
        callDayTimestring: {
            type: String
        },
        callDuration: {
            type: String
        },
        Day: {
            type: String
        }
    },
    { collection: "Day" }
);

module.exports = mongoose.model("employees", Day);