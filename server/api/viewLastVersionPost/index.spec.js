'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var viewLastVersionPostCtrlStub = {
  index: 'viewLastVersionPostCtrl.index',
  show: 'viewLastVersionPostCtrl.show',
  create: 'viewLastVersionPostCtrl.create',
  update: 'viewLastVersionPostCtrl.update',
  destroy: 'viewLastVersionPostCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var viewLastVersionPostIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './viewLastVersionPost.controller': viewLastVersionPostCtrlStub
});

describe('ViewLastVersionPost API Router:', function() {

  it('should return an express router instance', function() {
    viewLastVersionPostIndex.should.equal(routerStub);
  });

  describe('GET /api/viewLastVersionPosts', function() {

    it('should route to viewLastVersionPost.controller.index', function() {
      routerStub.get
        .withArgs('/', 'viewLastVersionPostCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/viewLastVersionPosts/:id', function() {

    it('should route to viewLastVersionPost.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'viewLastVersionPostCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/viewLastVersionPosts', function() {

    it('should route to viewLastVersionPost.controller.create', function() {
      routerStub.post
        .withArgs('/', 'viewLastVersionPostCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/viewLastVersionPosts/:id', function() {

    it('should route to viewLastVersionPost.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'viewLastVersionPostCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/viewLastVersionPosts/:id', function() {

    it('should route to viewLastVersionPost.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'viewLastVersionPostCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/viewLastVersionPosts/:id', function() {

    it('should route to viewLastVersionPost.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'viewLastVersionPostCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
