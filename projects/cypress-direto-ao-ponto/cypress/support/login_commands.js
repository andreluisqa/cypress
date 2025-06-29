Cypress.Commands.add('login_teste', (user, password) => {
    cy.clearCookies();  // Limpa os cookies
    cy.visit('https://www.saucedemo.com/');
    
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});
