'use strict';

var app = require('../..');
import request from 'supertest';

var newVersionPost;

describe('VersionPost API:', function() {

  describe('GET /api/versionPosts', function() {
    var versionPosts;

    beforeEach(function(done) {
      request(app)
        .get('/api/versionPosts')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          versionPosts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      versionPosts.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/versionPosts', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/versionPosts')
        .send({
          name: 'New VersionPost',
          info: 'This is the brand new versionPost!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newVersionPost = res.body;
          done();
        });
    });

    it('should respond with the newly created versionPost', function() {
      newVersionPost.name.should.equal('New VersionPost');
      newVersionPost.info.should.equal('This is the brand new versionPost!!!');
    });

  });

  describe('GET /api/versionPosts/:id', function() {
    var versionPost;

    beforeEach(function(done) {
      request(app)
        .get('/api/versionPosts/' + newVersionPost._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          versionPost = res.body;
          done();
        });
    });

    afterEach(function() {
      versionPost = {};
    });

    it('should respond with the requested versionPost', function() {
      versionPost.name.should.equal('New VersionPost');
      versionPost.info.should.equal('This is the brand new versionPost!!!');
    });

  });

  describe('PUT /api/versionPosts/:id', function() {
    var updatedVersionPost;

    beforeEach(function(done) {
      request(app)
        .put('/api/versionPosts/' + newVersionPost._id)
        .send({
          name: 'Updated VersionPost',
          info: 'This is the updated versionPost!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedVersionPost = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedVersionPost = {};
    });

    it('should respond with the updated versionPost', function() {
      updatedVersionPost.name.should.equal('Updated VersionPost');
      updatedVersionPost.info.should.equal('This is the updated versionPost!!!');
    });

  });

  describe('DELETE /api/versionPosts/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/versionPosts/' + newVersionPost._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when versionPost does not exist', function(done) {
      request(app)
        .delete('/api/versionPosts/' + newVersionPost._id)
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
