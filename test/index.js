const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js');

chai.use(chaiHttp);

const API = '/api/v1'

let name;
describe('Crud todos', () => {
  it('Get All Todos', (done) => {
    chai.request(app)
      .get(`${API}/todos`)
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.have.property('data');
        done();
      })
  })
  it('Create todo', (done) => {
    chai.request(app)
      .post(`${API}/todos`)
      .send({ name: 'test create todod' })
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.have.property('data');
        done()
      })
  })

  it('Error validate name is require', (done) => {
    chai.request(app)
      .post(`${API}/todos`)
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res.body).to.have.property('error');
        expect(res.body.error[0].msg).to.equal("name is required");
        done()
      })
  })

  it('Get One Todos', (done) => {
    chai.request(app)
      .get(`${API}/todos/1`)
      .end((err, res) => {
        console.log(res)
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('data');
        done();
      })
  })
})