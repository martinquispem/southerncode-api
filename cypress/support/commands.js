

Cypress.Commands.add('getResults', (value) => {
    const url = Cypress.config().baseUrl;
    cy.request({
        method: 'GET',
        url,
        qs: {
            q: value,
            format: 'json'
        }

    })
    .then((resp) => {
        expect(resp.status).to.equal(200)
    })
    .its('body')
    .then((resp) => {
        const response = JSON.parse(resp)
        Cypress.env('results', response)
    })
})