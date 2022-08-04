const { expect } = require('chai');
const { before, after } = require('mocha');
const Sinon = require('sinon');

const { registerUser, getAllUsers, getByIdUser } = require('../../../src/controllers/userController');
const { userService } = require('../../../src/services');
const { userMock } = require('../../mocks');

describe('UserController', () => {
  describe('#registerUser', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.body = userMock.body;
      res.json = Sinon.stub();
      Sinon.stub(userService, 'createUser').returns(userMock.token);
    })

    it('should return status code 201', async () =>{
      await registerUser(req, res, () => {});
      expect(res.status.calledWith(userMock.status.CREATED)).to.be.true;
    })

    it('should return a token', async () => {
      await registerUser(req, res, () => {});
      expect(res.json.args[0][0]).to.have.property('token');
      expect(res.json.args[0][0].token).to.be.equal(userMock.token);
    })
  })

  describe('#getAllUsers', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub();
      Sinon.stub(userService, 'getAll').returns(userMock.list);
    })

    it('should return status code 200', async () => {
      await getAllUsers(req, res, () => {});
      expect(userService.getAll.called).to.have.been.true;
      expect(res.status.calledWith(userMock.status.OK)).to.be.true;
    })

    it('should return an array of users', async () => {
      await registerUser(req, res, () => {});
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0]).to.be.equal(userMock.list);
    })
  })

  describe('#getByIdUser', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.params = { id: userMock.id };
      res.json = Sinon.stub();
      Sinon.stub(userService, 'getById').returns(userMock.list[0]);
    })

    it('should return status code 200', async () => {
      await getByIdUser(req, res, () => {});
      expect(userService.getById.called).to.have.been.true;
      expect(res.status.calledWith(userMock.status.OK)).to.be.true;
    })

    it('should return one user', async () => {
      await getByIdUser(req, res, () => {});
      expect(res.json.args[0][0]).to.be.an('object');
      expect(res.json.args[0][0]).to.be.equal(userMock.list[0]);
    })
  })

  describe('#deleteUserById', () => {})
})