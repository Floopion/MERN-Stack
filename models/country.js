const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CountrySchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    data: {type: Data, required: true}
  }
);


module.exports = mongoose('CountrySchema',CountrySchema)