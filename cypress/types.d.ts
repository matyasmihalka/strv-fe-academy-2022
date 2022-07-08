interface ICredentials {
  valid: {
    email: string
    password: string
  }
  invalid: {
    email: string
    password: string
  }
}

declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Chainable {
    fillInput(selector: string, value: string): void
  }
}
