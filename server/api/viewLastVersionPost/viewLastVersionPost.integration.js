'use strict';

var app = require('../..');
import request from 'supertest';

var newViewLastVersionPost;

describe('ViewLastVersionPost API:', function() {

  describe('GET /api/viewLastVersionPosts', function() {
    var viewLastVersionPosts;

    beforeEach(function(done) {
      request(app)
        .get('/api/viewLastVersionPosts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          viewLastVersionPosts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      viewLastVersionPosts.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/viewLastVersionPosts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/viewLastVersionPosts')
        .send({
          name: 'New ViewLastVersionPost',
          info: 'This is the brand new viewLastVersionPost!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newViewLastVersionPost = res.body;
          done();
        });
    });

    it('should respond with the newly created viewLastVersionPost', function() {
      newViewLastVersionPost.name.should.equal('New ViewLastVersionPost');
      newViewLastVersionPost.info.should.equal('This is the brand new viewLastVersionPost!!!');
    });

  });

  describe('GET /api/viewLastVersionPosts/:id', function() {
    var viewLastVersionPost;

    beforeEach(function(done) {
      request(app)
        .get('/api/viewLastVersionPosts/' + newViewLastVersionPost._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          viewLastVersionPost = res.body;
          done();
        });
    });

    afterEach(function() {
      viewLastVersionPost = {};
    });

    it('should respond with the requested viewLastVersionPost', function() {
      viewLastVersionPost.name.should.equal('New ViewLastVersionPost');
      viewLastVersionPost.info.should.equal('This is the brand new viewLastVersionPost!!!');
    });

  });

  describe('PUT /api/viewLastVersionPosts/:id', function() {
    var updatedViewLastVersionPost;

    beforeEach(function(done) {
      request(app)
        .put('/api/viewLastVersionPosts/' + newViewLastVersionPost._id)
        .send({
          name: 'Updated ViewLastVersionPost',
          info: 'This is the updated viewLastVersionPost!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedViewLastVersionPost = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedViewLastVersionPost = {};
    });

    it('should respond with the updated viewLastVersionPost', function() {
      updatedViewLastVersionPost.name.should.equal('Updated ViewLastVersionPost');
      updatedViewLastVersionPost.info.should.equal('This is the updated viewLastVersionPost!!!');
    });

  });

  describe('DELETE /api/viewLastVersionPosts/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/viewLastVersionPosts/' + newViewLastVersionPost._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when viewLastVersionPost does not exist', function(done) {
      request(app)
        .delete('/api/viewLastVersionPosts/' + newViewLastVersionPost._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
