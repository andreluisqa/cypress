describe('Testes Funcional de Login', () => {
    
        it('Login com sucesso', () => {
        
        cy.login_teste('standard_user','secret_sauce')

        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')

        //Validação da Ordem dos produtos
        cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain','Sauce Labs Bolt T-Shirt')

        //Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        
        //Checagem da quantidade de produtos adicionados ao carrinho
        cy.get('[data-test="shopping-cart-link"]').should('have.text','3')
    
        //Check no carrinho
        cy.get('[data-test="shopping-cart-link"]').click()
        
        cy.Produtos()

        //CheckOut
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Teste Primeiro nome')
        cy.get('[data-test="lastName"]').type('Teste Último nome')
        cy.get('[data-test="postalCode"]').type('123456789')
        cy.get('[data-test="continue"]').click()
        
        //Validar Carrinho na hora de terminar
        cy.Produtos()

        //Checagem valor total
        cy.get('[data-test="total-label"]').should('have.text','Total: $36.69')

        cy.get('[data-test="finish"]').click()

        //Checar Frase Final
        cy.get('.complete-header').should('have.text','Thank you for your order!')

        });
});



