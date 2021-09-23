const setup = require('../data/setup');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');


describe('test env', () => {
//-----------------------------------------------------------------//
  beforeEach(() => {

    return setup(pool); 
  });
  //-----------------------------------------------------------------//

  it('should be do nothing', () => {

    const a = 3;
    expect(a).toEqual(3);
  });


  //-----------------------------------------------------------------//
  it('creates a new something in our database', () => {
    return request(app)
      .post('/api/v1/orders')
      .send({ quantity: 10 })
      .then(res => {
        expect(res.body).toEqual({
          id: '1',
          quantity: 10
        });
      });
  });




//-----------------------------------------------------------------//
});
