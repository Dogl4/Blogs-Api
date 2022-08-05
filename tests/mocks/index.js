const userMock = require('./userMock');
const loginMock = require('./loginMock');
const categoryMock = require('./categoryMock');
const postMock = require('./postMock')

const statusMock = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
}

module.exports = { userMock, loginMock, categoryMock, statusMock, postMock };
