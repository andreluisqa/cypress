describe('Testes Funcional com login', () => {

    it('Deve realizar com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products')
        
    });
    it('Validando Login Incorreto', () => {

        cy.login_teste('incorreto','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface')
        
    });

    it('Validar Senha Incorreta', () => {
        
        cy.login_teste('standard_user','secret_sauce1')
        cy.get('[data-test="error"]').should('contain','Epic sadface')
    });
});

