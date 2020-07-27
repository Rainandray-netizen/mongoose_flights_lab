const { Schema, model } = require('mongoose')

const destinationSchema = new Schema(
  {
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    arrives: { type: Date },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  destination: [destinationSchema]
})

module.exports = model('Flight',flightSchema)