const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ThingSchema = new mongoose.Schema({
    name:String,
    description:String,
    usage:String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
}, {
    collection: 'thing'
});
ThingSchema.index({name: 'text', description: 'text', usage: 'text'});
ThingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('thing', ThingSchema);