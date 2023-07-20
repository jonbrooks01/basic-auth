'use strict';

const { sequelize } = require('../src/auth/models');
const server = require('../src/server')
const supertest = require('supertest');
const mockServer = supertest(server);
const base64 = require('base-64');
const user1 = {username: 'john', password: 'pizzaRules'};
const user2 = {username: 'josh', password: 'pineapplePizza'};

beforeAll(async (done) => {
  await sequelize.sync();
  done();
});
afterAll(async (done) => {
  await sequelize.drop();
  done();
});

describe('test the server routes and db', () => {
  test("we can post a new user to /signup", async() => {
    // req.body = user1;
    const res = await mockServer.post('/signup').send(user1);
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text).username).toBe('john');
    expect(JOSN.parse(res.text).password).toBeTruthy();
  });

  test("we can send a user via basic auth to /signin", async() => {

    const res = await mockServer
    .post("/signin")
    .auth(user1.username, user1.password);
    // .set('Authorization', encodedBasicAuthStr)
    expect(res.status).toBe(200);
    expect(JSON.parse(res.text).username).toBe('john');
    expect(JOSN.parse(res.text).password).toBeTruthy();
  });
});
