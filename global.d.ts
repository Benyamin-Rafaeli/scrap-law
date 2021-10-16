/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    waitForResources(resources?: string[]): Chainable<void>;
  }
}
