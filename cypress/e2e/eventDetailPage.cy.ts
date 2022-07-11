import { formattedTime } from '~/features/events/lib/formattedTime'
import { createEvent } from '~/features/events/types.fixtures'

describe('[scenario] event detail page', () => {
  const expectedEvents = [
    createEvent(),
    createEvent({ isPastEvent: true }),
    createEvent(),
  ]

  //   beforeEach(() => {
  //     cy.interceptPath('/events', expectedEvents)
  //     cy.visit('/')
  //   })

  it('should list events', () => {
    cy.interceptPath('/events', expectedEvents)
    cy.visit('/')
    cy.get('ul > li article').should('have.length', 3)
  })

  describe('when user clicks on event in future', () => {
    it('should redirect to event detail page', () => {
      cy.interceptPath(`/events/*`, expectedEvents[1])
      cy.get('ul > li:first-child article h3 a').click()

      cy.url().should('include', `/events/${expectedEvents[1].id}`)

      cy.get('h1').should('contain', `Detail Event: #${expectedEvents[1].id}`)
    })
  })

  describe('when user loads detail event page', () => {
    it('should contain all the details', () => {
      cy.interceptPath(`/events/${expectedEvents[0].id}`, expectedEvents[0])
      cy.visit(`/events/${expectedEvents[0].id}`)

      cy.get('h1').should('contain', `Detail Event: #${expectedEvents[0].id}`)
      cy.get('time').should(
        'contain',
        formattedTime(expectedEvents[0].startsAt)
      )
      cy.get('h2')
        .contains(expectedEvents[0].title)
        .should('contain', expectedEvents[0].title)
    })
  })
})
