'use strict';

var mongoose = require('mongoose'),
  Grid = require('gridfs-stream'),
  Q = require('q');

Grid.mongo  = mongoose.mongo;
var gfs = new Grid(mongoose.connection.db);

exports.create = function(file){
  var deferred = Q.defer();

  var writeStream = gfs.createWriteStream({
    filename: file.name,
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
  var stream = gfs.createReadStream({
    _id: fileId
  });

  return stream;
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