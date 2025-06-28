

describe('Api Teste de Registro', () => {    
    it('Deve registrar com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://fakerestapi.azurewebsites.net/api/v1/Authors',
            body: {                
                    "id": 1,
                    "idBook": 0,
                    "firstName": "teste",
                    "lastName": "teste"               
            }
                
            }).then((response)=>{
                expect(response.status).to.equal(200)               
            })
        });
        it('Deve Deletar com sucesso', () => {
            cy.request({
                method: 'DELETE',
                url: 'https://fakerestapi.azurewebsites.net/api/v1/Books/1',
                BODY: 1
                    
                }).then((response)=>{
                    expect(response.status).to.equal(200)
        });
    })
})



