
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LocationSchema = new Schema({
  latitude: {
    type: String,
    required: 'enter the latitude'
  },
  longitude: {
    type: String,
    required: 'enter the longitude'
  }
});

module.exports = mongoose.model('Locations', LocationSchema);