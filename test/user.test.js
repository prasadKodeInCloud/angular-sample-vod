var should = require('should');
var assert = require('assert');
var mongo = require('mongoskin');
var config = require('../config');

//Run mocha test/user.test.js in root path
describe('User Model', function(){
    var user = {
        _id: 'aaaabbbb-sample-key-49bcf07ef92495678',
        fingerPrint:'aaaabbbb-sample-key-49bcf07ef92495678',
        timezoneOffset: -480,
        userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36'
    };

    var dbConfig =  config.dbProduction; 
	var db = mongo.db('mongodb://'+ dbConfig.mongo.url +'/' + dbConfig.mongo.database , { safe:true });
	db.bind('users');
    var UserMdl = require('../src/model/users.mdl').load( db );
    
    before(function(done) {
        done();
    });
    
    describe('Create User', function() {
        //Ignore the default timeout since db connection can be slow
        this.timeout(0);
        it('should create a new user', function(done) {
            UserMdl.create( user, function( result ) {
                result.should.be.an.object;
                result.should.have.properties('_id');
                UserMdl.remove({_id: result._id });
                done();
            });
        });

        it('should return existing user if a user is with same id at user creation', function(done) {
            UserMdl.create( user, function( res ) {
                UserMdl.create( user, function( result ) {
	                result.should.be.an.object;
	                result.should.have.properties('_id');
	                result._id.should.be.equal( res._id );
	                UserMdl.remove({_id: result._id });
	                done();
            	});
            });
        });
    });
});