describe('Basic Cypress Test', () => {
it('Goes to the site and navigates to the commands page', () => {

cy.visit('https://example.cypress.io'); // Visits the homepage
cy.contains('Commands').click(); // Clicks commands from dropdown menu

cy.contains('Querying').should('be.visible').click(); // Clicks on the Querying option from the dropdown menu
cy.url().should('include', '/commands'); // Asserts that the new url contains '/commands'
});
});

