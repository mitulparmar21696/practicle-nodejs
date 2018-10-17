/* controllers */
var async = require('async');
var mongoose = require('mongoose');
// Load the full build.
const Thing = require("../models/things.model");
var _ = require('lodash');
var moment = require('moment');
const sendResponse = require('../modules/response.helper');
// Gets all surveys in the system.
exports.saveThing=function(req,res){
    console.log(req.body)
    try{
        Thing.create(req.body,function(err,savedThing){
            if(err){
                return res.status(201)
                .json({
                    err: err
                });
            }else{
                return res.status(200)
                .json({
                    savedThing: savedThing,
                });
            }
        });
    }catch(exception){
        console.log(exception)
        return res.status(200)
        .json({
            exception: exception,
        });
    }
    
}

exports.getAll=function(req,res){
    try{
        Thing.find({},function(err,foundText){
            if(err){
                return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
            }else{
                return sendResponse.sendJsonResponse(req, res, 200, foundText, "1", "Success.");
            }
        });
    }catch(exception){
        return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
    }
}

exports.searchEngine=function(req,res){
    try{
        Thing.find({ $text: { $search: req.body.text } },function(err,foundText){
            if(err){
                return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
            }else{
                return sendResponse.sendJsonResponse(req, res, 200, foundText, "1", "Success.");
            }
        });
    }catch(exception){
        return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
    }
}

exports.getThingById = function(req,res){
    var objectId = mongoose.Types.ObjectId(req.body.id);

    try{
        Thing.findOne({ '_id' : objectId }, function ( err , found){
            if(err){
                return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
            }else{
                return sendResponse.sendJsonResponse(req, res, 200, found, "1", "Success.");
            }
        });
    }catch(exception){
        return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
    }
}

exports.updateThing = function(req,res){
    var objectId = mongoose.Types.ObjectId(req.body._id);

    try{
        Thing.update({ '_id' : objectId },req.body, function ( err , found){
            if(err){
                return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
            }else{
                return sendResponse.sendJsonResponse(req, res, 200, found, "1", "Success.");
            }
        });
    }catch(exception){
        return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
    }
}

exports.deleteThing = function(req,res){
    var objectId = mongoose.Types.ObjectId(req.body.id);

    try{
        Thing.remove({ '_id' : objectId }, function ( err , found){
            if(err){
                return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
            }else{
                return sendResponse.sendJsonResponse(req, res, 200, found, "1", "Success.");
            }
        });
    }catch(exception){
        return sendResponse.sendJsonResponse(req, res, 201, "", "1", "Error Occured");
    }
}