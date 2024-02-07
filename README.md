# Weird legal requirements

### Task:
Imagine a sample sorter: a machine that is responsible for placing a test tube into one of many racks.
This machine can recognize the test tube (read its id) and place it into the specified rack.
Here comes your task. Write an application that will allow the user to insert a list of test tubes, and
then it will assign them to racks based on the following logic:

1. Each tube contains a material for a specific patient
2. It is illegal to place patients of the same age into the same rack
3. It is illegal to place patients working in the same company into the same rack
4. It is illegal to place patients who live in the same city district into the same rack
5. It is illegal to place patients with the same vision defect into the same rack
6. The number of racks is very limited

## Before install
- Install proper version of Node `nvm i` using [NVM](https://github.com/nvm-sh/nvm)
- Use installed Node version `nvm use`

## Getting started:

1. Pull the app from github:
   https://github.com/gunitguy/marcel-fe-task
2. `npm i` - install dependencies
3. `npm run build` - running the webpack
4. Then built app files will show in “dist” folder.

## Running and testing app locally:

1. `npm run start`
2. Open app in browser at `localhost:8080`
3. Put test json with data (from `/data/test-tubes.json`) into file input
4. Add limit for racks
5. Submit and see the result (group tubes and hwo many additional racks were needed)

## Tests and linters

1. `npm run test` - run unit tests
2. `npm run lint` - run eslint and prettier checks
3. `npm run lint:fix` - run eslint and prettier with fix
4. `npm run test:all` - run all checks (prettier, eslint, jest tests)

## Improvements:

- more unit tests can be added
- E2E tests can be added
- media queries to be apply responsiveness
- validation for object in file input
- more advanced error handling
