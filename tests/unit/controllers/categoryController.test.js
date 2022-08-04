const { expect } = require('chai');
const { before } = require('mocha');
const Sinon = require('sinon');

const { registerCategory, getCategories } = require('../../../src/controllers/categoryController');
const { categoryService } = require('../../../src/services');
const { categoryMock, statusMock } = require('../../mocks');

describe('Category Controller', () => {
  describe('#registerCategory', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      req.body = categoryMock.body;
      res.json = Sinon.stub();
      Sinon.stub(categoryService, 'createCategory').returns(categoryMock.list[2]);
    })

    it('should return status code 201', async () =>{
      await registerCategory(req, res, () => {});
      expect(categoryService.createCategory.called).to.been.true;
      expect(res.status.calledWith(statusMock.CREATED)).to.be.true;
    })

    it('should return a category', async () => {
      await registerCategory(req, res, () => {});
      expect(categoryService.createCategory.called).to.been.true;
      expect(res.json.args[0][0]).be.an('object');
      expect(res.json.args[0][0]).to.be.equal(categoryMock.list[2]);
    })
  })

  describe('#getCategories', () => {
    const req = {}
    const res = {}

    before(() => {
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub();
      Sinon.stub(categoryService, 'getCategories').returns(categoryMock.list);
    })

    it('should return status code 200', async () => {
      await getCategories(req, res, () => {});
      expect(categoryService.getCategories.called).to.have.been.true;
      expect(res.status.calledWith(statusMock.OK)).to.be.true;
    })

    it('should return an array of categories', async () => {
      await getCategories(req, res, () => {});
      expect(res.json.args[0][0]).to.be.an('array');
      expect(res.json.args[0][0]).to.be.equal(categoryMock.list);
    })
  })
})
