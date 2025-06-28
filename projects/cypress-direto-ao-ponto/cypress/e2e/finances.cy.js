


describe('Transações', () => {

beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/');
});

    it('Cadastrar uma entrada', () => {
        
        criarTransacao('Freela', 250)
        
        cy.get('tbody tr td.description')
        .should('have.text','Freela')
        
    });

    it('Cadastrar uma saída', () => {
        
        criarTransacao('Cinema', -40)

        cy.get('tbody tr td.description')
        .should('have.text','Cinema')

    });

    it('Excluir transação', () => {
        criarTransacao('Freela', 100)
        criarTransacao('Mesada', 10)

        cy.contains('.description', 'Freela')
          .siblings()
          .children('img').click()

          cy.contains('.description', 'Mesada')
          .siblings()
          .children('img').click()
        
        cy.get('tbody tr').should('have.length')
    });

});

function criarTransacao(descricao, valor){
    cy.contains('Nova Transação')
    .click()
    
    cy.get('#description')
    .type(descricao)
    
    cy.get('#amount')
    .type(valor)
    
    cy.get('#date')
    .type('2023-02-15')

    cy.contains('button','Salvar')
    .click()
}