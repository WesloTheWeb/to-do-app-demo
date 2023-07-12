# to-do-app-demo
Take two on TypeScript and I like it! Getting my feet wet in TypeScript. Trying something new and building this in Vite.

## Launching the app on your local machine:
This is using [Vite](https://vitejs.dev/), which is the de-facto replacement of CRA. To start the project:
1. Clone this repository.
2. Open the project folder you just cloned, and run `npm install` in the root directory.
3. Once the dependencies are installed, run the script `npm run dev`. Additionally you can look at the 'package.json' file
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

### Swap Logic
The handleComplete function moves the task from the activeTasks array to the completedTasks array. Here's how it works:

1. When a task is marked as completed, handleComplete is called with the task's id as a parameter.
2. Inside handleComplete, the task to be moved is identified by its id from the activeTasks array using the find function:

`const taskToMove = activeTasks.find((task) => task.id === id);`

3. The taskToMove is then added to the completedTasks array by calling setCompletedTasks and spreading the current completedTasks with the newly completed task:

`setCompletedTasks((prevTasks) => [...prevTasks, { ...taskToMove, completed: true }]);`

4. Finally, the taskToMove is removed from the activeTasks array by calling setActiveTasks and filtering out the task by its id:

`setActiveTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));`

So, in essence, the handleComplete function handles both the removal of the task from the activeTasks array and the addition of it to the completedTasks array.

### Lifting State up
(App.tsx) Because there are two different components, Tasks and CompletedTasks has the same prop `onDelete` but,
we can pass two different functions of deleting active tasks and completed task respectively. This is good practice and
craftsmanship of code.