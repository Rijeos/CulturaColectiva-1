'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var versionPostCtrlStub = {
  index: 'versionPostCtrl.index',
  show: 'versionPostCtrl.show',
  create: 'versionPostCtrl.create',
  update: 'versionPostCtrl.update',
  destroy: 'versionPostCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var versionPostIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './versionPost.controller': versionPostCtrlStub
});

describe('VersionPost API Router:', function() {

  it('should return an express router instance', function() {
    versionPostIndex.should.equal(routerStub);
  });

  describe('GET /api/versionPosts', function() {

    it('should route to versionPost.controller.index', function() {
      routerStub.get
        .withArgs('/', 'versionPostCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/versionPosts/:id', function() {

    it('should route to versionPost.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'versionPostCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/versionPosts', function() {

    it('should route to versionPost.controller.create', function() {
      routerStub.post
        .withArgs('/', 'versionPostCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/versionPosts/:id', function() {

    it('should route to versionPost.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'versionPostCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/versionPosts/:id', function() {

    it('should route to versionPost.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'versionPostCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/versionPosts/:id', function() {

    it('should route to versionPost.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'versionPostCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
