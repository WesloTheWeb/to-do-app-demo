# to-do-app-demo
Take two on TypeScript and I like it! Getting my feet wet in TypeScript. Trying something new and building this in Vite.

## Launching the app on your local machine:
This is using [Vite](https://vitejs.dev/), which is the de-facto replacement of CRA. To start the project:
1. Clone this repository.
2. Open the project folder you just cloned, and run `npm install`.
3. Once dependencies installed, run the script `npm run dev`. Additionally you can look at the 'package.json' file
to see available scripts, but this should run on http://localhost:5173/ not localhost:3000.

## Developer Notes
As this is my first in-depth TypeScript project going to provide notes in this section to build strong habits, and to 
help others who are still learning TypeScript and happen upon this small scoped repo to gather learnings.

- Very important to have consistent file of interface so you can
- link component prop interface to the model interface.

- The arrow function () => {} is necessary to ensure the onDelete function is not called immediately when the component renders, but only when the button is clicked. (ActiveTask.tsx)

-In TypeScript, void is a type that denotes the absence of having any type at all. When used as a function return type, 
void indicates that a function does not return a value. (ActiveTask.tsx)

- If a function was supposed to return a string, for example, the interface would look like this: onDelete: (id: string) => string;. 
- But in the case of an event handler function like onDelete, we're not interested in any return value. We simply want to perform an action  (deleting a task) when the function is called. Thus, we use void as the return type.  (ActiveTask.tsx)

