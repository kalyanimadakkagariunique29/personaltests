import fs from 'fs';

describe('Download data.txt file test', () => {
  const downloadsFolder = Cypress.config('downloadsFolder');
  const fileName = 'data.txt';

  it('should download data.txt from the application', () => {
    // Visit the page where the download is triggered
    //cy.visit('http://localhost:3000/my-app'); // Update with your actual app URL

    // Trigger the download action
   // cy.get('#downloadDataBtn').click(); // Replace with your actual download button selector
   cy.downloadFile('http://localhost:3000/my-app/data.txt', 'cypress/downloads', 'data.txt');


    // Wait for the download to complete
    cy.wait(2000);

    // Verify that the file exists in the downloads folder
   
    cy.readFile('cypress/downloads/data.txt').should('contain', '10');

  });
});