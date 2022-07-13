# Eventio

A project where the main concepts were developed during the STRV Frontend Academy 2022 and the details were completed afterwards.

## Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

## Getting Started

Follow this section to get the project running in your development machine.

### Prerequisites

Before getting started, make sure you have these tools installed:

- [Git](https://git-scm.com/)
- [Node.js v14](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

> We recommend you use [nvm](https://github.com/nvm-sh/nvm) to install Node.js.

### Installation

Provided you have all prerequisites ready, you can install the application with the following command:

```sh
yarn
```

### Environment variables

- `NEXT_PUBLIC_API_URL` - URL of the backend service
- `NEXT_PUBLIC_API_KEY` - API key for the backend service
- `NEXT_PUBLIC_DEPLOYMENT_URL` - URL where the application lives in production
- `NEXT_PUBLIC_BASE_URL` - URL for development (localhost)
- `NEXT_PUBLIC_SENTRY_DSN` - URL for connection with the Sentry(error logging) service

At [Vercel](https://vercel.com/), additional environment variables are needed to connect with Sentry. You can use [Vercels's integration feature with Sentry](https://vercel.com/integrations/sentry), which will automatically set up these variables (`SENTRY_AUTH_TOKEN, VERCEL_GIT_COMMIT_SHA, SENTRY_PROJECT, SENTRY_ORG`).

Don't forget to extend the `SENTRY_AUTH_TOKEN` env variables visibility to 'Preview' to ensure your development preview builds are not failing.

### Start the Application

To start a local server with the running application, run the following:

```sh
yarn dev
```

### Deployment

The application is deployed at [Vercel](https://vercel.com/) everytime new commits are pushed to the `main` branch (production mode) or to other branches (preview mode).

> In case you need to deploy manually, you can install the [Vercel CLI](https://vercel.com/cli) and run the following command: `vercel`

## Roadmap

- [x] Project setup
- [x] List of events
  - [x] Consume events from API
  - [x] Present the list of events
  - [x] Allow switching between past/future events
  - [x] Allow switching between list/grid view modes
- [x] Login
  - [x] Create login form with client-side validation
  - [x] Integrate form with API
  - [x] Redirect user based on authentication status
- [x] Create event
  - [x] Create new event form with client-side validation
  - [x] Integrate form with API
  - [x] Redirect user to the list of events after creation
  - [x] Refresh list of events upon creation
- [x] Attend event button
  - [x] Create reusable button component
  - [x] Implement join/leave logic
  - [x] Connect to API
  - [x] Restrict the visibility for anonymous users
- [x] Event details
  - [x] Consume event details from API based on the ID in path
  - [x] Create new component to show all the event details
  - [x] Create new component to show all the attendees
- [x] Edit event
  - [x] Create pre-filled event form with client-side validation
  - [x] Integrate form with API
  - [x] Refactor attend button for event owners to show 'EDIT'
  - [x] Restrict path to event owners
- [x] User profile
  - [x] Read user info from context
  - [x] Show events where the user is the owner
  - [x] Restrict path for anonymous users
- [x] Register user
  - [x] Create register form with client-side validation
  - [x] Integrate form with API
  - [x] Redirect user based on authentication status
  - [x] Restrict register and login page for authenticated users

## Important libraries used

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/) - controlling forms
- [React Context API](https://reactjs.org/docs/context.html) - logged in user data and application wise UI state management
- [React Query](https://tanstack.com/query/v4/docs/overview) - asynchronous API side data state management
- [Styled Components](https://styled-components.com/) - styling the UI

## Testing and documentation

- [Storybook](https://storybook.js.org/) - for UI development
- [Jest](https://jestjs.io/) - unit test of functions and hooks
- [Cypress](https://www.cypress.io/) - End2End tests

Note:
_This project was developed to explore various corners of frontend development and was not meant for regular production, therefore the tests and documentation are not complete._
