describe('Testes Aleatórios', () => {

    it('Adicionar + de 1 item e fechar compra', () => {
        cy.login_teste('standard_user','secret_sauce')
        
        //Adicionando item
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
        cy.contains('Sauce Labs Backpack').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="back-to-products"]').click()

        //fechando a compra
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('André')
        cy.get('[data-test="lastName"]').type('Ribeiro')
        cy.get('[data-test="postalCode"]').type(123456)
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()




    });




    
});