import { getGreeting } from '../support/app.po';

describe('store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to store!');
  });
});
