export {}

Cypress.Commands.add('fillInput', (selector: string, value: string) => {
  cy.get(selector).should('be.visible').type(value, { force: true })
})

Cypress.Commands.add(
  'interceptPath',
  (uri, body, method = 'GET', statusCode = 200) => {
    cy.intercept(method, `${Cypress.env('api_url')}/${uri}`, {
      statusCode,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body,
    })
  }
)
