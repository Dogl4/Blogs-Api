const { expect } = require('chai');
const { before } = require('mocha');
const Sinon = require('sinon');

const {
  registerPost,
} = require('../../../src/controllers/postController');
const { postService } = require('../../../src/services');
const { postMock, statusMock } = require('../../mocks');

describe('Post Controller', () => {
  describe('#registerPost', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.body = postMock.body;
      res.json = Sinon.stub();
      Sinon.stub(postService, 'createPost').returns(postMock.list[2]);
    })

    it('should return status code 201', async () =>{
      await registerPost(req, res, () => {});
      expect(res.status.calledWith(statusMock.CREATED)).to.be.true;
    })

    it('should return a post', async () => {
      await registerPost(req, res, () => {});
      expect(res.json.args[0][0]).to.be.equal(postMock.list[2]);
    })
  })
})