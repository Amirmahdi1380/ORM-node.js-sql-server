// Rename this file to api.test.mjs

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'; // Make sure your app is exported as default in app.js or server.js

const { expect } = chai;
chai.use(chaiHttp);

describe('Projects API', () => {
  it('should create a new project', (done) => {
    const project = {
      title: 'New Project',
      description: 'Project Description',
      status: 'open',
      min_invest: 100,
      fund_needed: 5000,
      fund_achieved: 0,
      expected_profit: 2000,
      commission: 5,
      start_at: new Date(),
      finished_at: new Date(),
      profit: 0,
      created_at: new Date()
    };

    chai.request(app)
      .post('/api/projects')
      .send(project)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', project.title);
        done();
      });
  });

  // Add more test cases as needed
});

describe('Tickets API', () => {
  it('should create a new ticket', (done) => {
    const ticket = {
      user_id: 1,
      title: 'New Ticket',
      description: 'Ticket Description',
      type_id: 1,
      project_id: 1
    };

    chai.request(app)
      .post('/api/tickets')
      .send(ticket)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', ticket.title);
        done();
      });
  });

  // Add more test cases as needed
});
