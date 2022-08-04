const { expect } = require('chai');
const { before } = require('mocha');
const Sinon = require('sinon');

const { registerUser } = require('../../../src/controllers/userController');
const { userService } = require('../../../src/services');
const { userMock } = require('../../mocks');

describe('UserController', () => {
  const req = {}
  const res = {}

  before(() => {
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub();
  })

  describe('#registerUser', () => {
    before(() => {
      req.body = userMock.body;
      Sinon.stub(userService, 'createUser').returns(userMock.token);
    })

    it('should return status code 201', async () =>{
      await registerUser(req, res, () => {});
      expect(res.status.calledWith(201)).to.be.true;
    })

    it('should return a token', async () => {
      await registerUser(req, res, () => {});
      expect(res.json.args[0][0]).to.have.property('token');
      expect(res.json.args[0][0].token).to.be.equal(userMock.token);
    })
  })

  describe('#getAllUsers', () => {})

  describe('#getByIdUser', () => {})

  describe('#deleteUserById', () => {})
})