const { expect } = require('chai');
const { before } = require('mocha');
const Sinon = require('sinon');

const { registerUser, getAllUsers, getByIdUser, deleteUserById } = require('../../../src/controllers/userController');
const { userService } = require('../../../src/services');
const { userMock, statusMock } = require('../../mocks');

describe('User Controller', () => {
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
      expect(res.status.calledWith(statusMock.CREATED)).to.be.true;
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
      expect(res.status.calledWith(statusMock.OK)).to.be.true;
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
      expect(res.status.calledWith(statusMock.OK)).to.be.true;
    })

    it('should return one user', async () => {
      await getByIdUser(req, res, () => {});
      expect(res.json.args[0][0]).to.be.an('object');
      expect(res.json.args[0][0]).to.be.equal(userMock.list[0]);
    })
  })

  describe('#deleteUserById', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.user = userMock.list[0];
      res.end = Sinon.stub();
      Sinon.stub(userService, 'deleteUserById').returns(userMock.list[0]);
    })

    it('should return status code 204', async () => {
      await deleteUserById(req, res, () => {});
      expect(userService.deleteUserById.called).to.have.been.true;
      expect(res.status.calledWith(statusMock.NO_CONTENT)).to.be.true;
    })

    it('should return an empty body', async () => {
      await deleteUserById(req, res, () => {});
      expect(res.end.called).to.have.been.true;
      expect(res.end.args[0][0]).to.be.equal();
    })
  })
})