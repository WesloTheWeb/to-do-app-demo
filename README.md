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


### Passing state as prop
(App.tsx -> OverlayModal.tsx -> Overlay.tsx) setModalVisible is a function that expects one argument, a boolean, to update the state. So, when you directly pass setModalVisible as a prop, it will execute with whatever arguments the parent component passes to it.

However, in this case, the parent component isn't passing anything, which can lead to bugs or unexpected behavior.

By using () => setModalVisible(false), you're creating a new function that doesn't expect any arguments and will always call setModalVisible with false when executed. This ensures that no matter what, setModalVisible is called with the expected arguments, preventing potential bugs.

In essence, you are controlling the arguments passed to setModalVisible, making sure it always receives false, which is exactly what you want when closing the modal.


## Take Aways I wish to share for those learning and viewing this repo:
1. State Management: Keeping state at the highest common ancestor of components that need the state is a good practice (also known as "lifting state up"). In this case, it is the App component. This makes it easy to pass state and state changing functions down to child components as props. However, in larger applications, this can lead to "prop drilling", where props have to be passed through multiple levels of components. To address this, you might want to explore state management libraries like Redux or context-based solutions like React's Context API.

2. Components Communication: Parent-child communication in React is done mainly via props. Child components can communicate with parents by calling functions passed down to them as props (like what we did with onApplyChanges), and parent components can pass information down to children via props (like currentTaskId).

3. Controlled Components: The input field in the modal is a controlled component because its value is directly controlled by React state (inputValue), which gives you more control over the component's behavior.

4. Conditional Rendering: Use conditional rendering wisely to ensure components are only rendered when needed. The modal component is a good example of this.

5. Prevent Default Behavior: Use event.preventDefault() to prevent the default behavior of elements, especially form elements. This is crucial in situations like form submission, where the default behavior may result in unwanted page refreshes.

6. Error Handling & Input Validation: It's important to validate inputs and handle possible error scenarios in the UI. We did this by disabling the "Apply Changes" button if the input field was empty.


### Closing Thoughts
This is ultimately a giant form of creating, reading, updating and deleting, but I am more comfortable with TypeScript in regards to React. Maybe I'll add more features like a wheel for task or something new. I did want to do a timestamp but maybe later. This was a great project because my go-to would be React Hook Forms, and forms can be tricky and tedious. If I had a choice I probably would do React Hook Form only to take advantage of that library's error handling, but it always is good to see forms from a native point of view.