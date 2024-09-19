
let resources;

describe('Create Student UI Interaction', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore specific error (in this case, 'Identifier has already been declared')
        if (err.message.includes('Identifier \'started\' has already been declared')) {
            return false;  // Prevent Cypress from failing the test
        }
        
        // Still throw other errors
        return true;
    });
    

    before(() => {
        cy.fixture('resources').then((res ) =>
        {
          resources = res;
        });
        
    });

    beforeEach(() => {
        cy.log(resources.BaseUrl);
        cy.visit(resources.BaseUrl);
    });
    

    it('Creates Students', () => {

        cy.get('[href="/students"]').click();
        
        cy.get('.btn').click();

        cy.get('#first_name').type('Jeremiah{enter}') //first name

        cy.get('#last_name').type('igbinedion{enter}') //last name
        cy.get('#reg_no').type('442 {enter}')

    });
    
});