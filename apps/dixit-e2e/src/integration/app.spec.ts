import { getGreeting } from '../support/app.po';

describe('dixit', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to dixit!');
  });
});
