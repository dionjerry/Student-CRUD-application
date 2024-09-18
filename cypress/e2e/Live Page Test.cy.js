describe('Home Page Loads And Website is Live', () => {
  let resources;

  before(() => {
      
    cy.fixture('resources').then((res) =>
    {
        resources = res;
    });

  });

  beforeEach(() => {
      cy.visit(resources.BaseUrl)
  });
  

  it('Loads Succesfully', () => {

    cy.visit(resources.BaseUrl)


  });

  it('Checks Page Title', () => {

        cy.title().should('include', 'Student');

  });

  it('Checks Content', () => {
      
    

    cy.get('body').should('contain', 'Student');

  });

})