'use strict';

var mongoose = require('mongoose'),
  Grid = require('gridfs-stream'),
  Q = require('q');

Grid.mongo  = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);

exports.create = function(file){
  var deferred = Q.defer();

  //console.log(file);
  var writeStream = gfs.createWriteStream({
    filename: file.originalname,
    mode: 'w',
    content_type: file.mimetype
  });

  writeStream.on('close', function(f) {
    deferred.resolve(f);
  });

  writeStream.on('error', function(error){
    deferred.reject(error);
  });

  //Write buffer data
  writeStream.write(file.buffer);
  writeStream.end();

  return deferred.promise;
};

exports.get = function(fileId){
  // WITH RETURNING PROMISE
  var deferred = Q.defer();
  gfs.findOne({ _id: fileId}, function (error, file) {
    if(!file){
      deferred.reject(error);
    }else{
      var stream = gfs.createReadStream({
        _id: fileId
      });
      return deferred.resolve(stream);
    }

  });
  return deferred.promise;

  // WITHOUT RETURNING PROMISE

  /*var stream = gfs.createReadStream({
    _id: fileId
  });*/

  //return stream;
};

exports.delete = function(fileId){
  var deferred = Q.defer();

  gfs.remove({
    _id: fileId
  }, function(error){
    if(error){
      return deferred.reject(error);
    }
    return deferred.resolve();
  });

  return deferred.promise;
};
