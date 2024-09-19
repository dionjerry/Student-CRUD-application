let resources ;
describe(' Delete User', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore specific error (in this case, 'Identifier has already been declared')
        if (err.message.includes('Identifier \'started\' has already been declared')) {
            return false;  // Prevent Cypress from failing the test
        }
        
        // Still throw other errors
        return true;
    });
    before(() => {

        cy.fixture('resources').then((res) => {

            resources = res;
        });
    
    });
    
    
    
    beforeEach(() => {
        cy.visit(resources.BaseUrl+'/students');
        
    });

    it('selects student Data and delete ', () => {
        cy.get('body').contains('Jeremiah').scrollIntoView().click();
        cy.get('#delete_std').click();
    });

   
})