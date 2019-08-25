import { getGreeting } from '../support/app.po';

describe('cms', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to cms!');
  });
});
