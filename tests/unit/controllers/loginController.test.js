const { expect } = require('chai');
const { before } = require('mocha');
const Sinon = require('sinon');

const { connecting } = require('../../../src/controllers/loginController');
const { loginService } = require('../../../src/services');
const { userMock, loginMock, statusMock } = require('../../mocks');

describe('Login Controller', () => {
  describe('#connecting', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.body = loginMock.body;
      res.json = Sinon.stub();
      Sinon.stub(loginService, 'loggingIn').returns(userMock.token);
    })

    it('should return status code 200', async () =>{
      await connecting(req, res, () => {});
      expect(res.status.calledWith(statusMock.OK)).to.be.true;
    })

    it('should return a token', async () => {
      await connecting(req, res, () => {});
      expect(res.json.args[0][0]).to.have.property('token');
      expect(res.json.args[0][0].token).to.be.equal(userMock.token);
    })
  })
})