**Project Plan: Task Tracker with Context-based Theme Toggle**

This project can be completed within an hour and incorporates key concepts from the presentation: State, Props, Styling, Context API, and Routing.

**Project Goal (1 Hour)**
Build a basic **Task Tracker** application that allows users to add tasks, mark them as complete, and switch between a Light and Dark theme using React's Context API.

**Features & Timeline**

| Time Allotment  | Feature                                                                                                                                                   |       Concepts Practiced       |
| :-------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------: |
| **0 - 10 min**  | **Project Setup & Basic Components**                                                                                                                      |                                |
|                 | \[ \] Set up a new React project (e.g., Vite/Create React App).                                                                                           |        Component-Based         |
|                 | \[ \] Create `App`, `Header`, and `TaskList` components.                                                                                                  |                                |
| **10 - 25 min** | **Task State and Input**                                                                                                                                  |                                |
|                 | \[ \] Implement `useState` in the main component to manage an array of tasks (e.g., `const [tasks, setTasks] = useState([])`).                            |     State, `useState` Hook     |
|                 | \[ \] Create an `AddTaskForm` component with an input field. Pass a function via `props` to add new tasks to the state array.                             |         Props, Styling         |
|                 | \[ \] Apply basic styling (separate CSS sheet) for the form and task list.                                                                                |            Styling             |
| **25 - 40 min** | **Context API for Theming**                                                                                                                               |                                |
|                 | \[ \] Create a `ThemeContext` using `createContext` and `useContext`.                                                                                     | Context API, `useContext` Hook |
|                 | \[ \] Create a `ThemeProvider` component to wrap the entire app. This provider will manage the theme state (`'light'` or `'dark'`) and a toggle function. |   Prop Drilling (Avoidance)    |
|                 | \[ \] Implement a toggle button in the `Header` component that uses `useContext` to change the global theme state.                                        |             Hooks              |
| **40 - 55 min** | **Task Functionality and Display**                                                                                                                        |                                |
|                 | \[ \] Create a `TaskItem` component that receives task data and a completion handler via `props`.                                                         |             Props              |
|                 | \[ \] Add logic to the `TaskItem` to change its background/text color based on the _current theme_ from `ThemeContext`.                                   |      Styling, Context API      |
|                 | \[ \] Implement a function to mark tasks as complete, updating the state array.                                                                           |        State Management        |
| **55 - 60 min** | **Review and Cleanup**                                                                                                                                    |                                |
|                 | \[ \] Test task adding, completion, and theme toggling.                                                                                                   |                                |

---

- React is a JavaScript library for building dynamic user interfaces.
- The Context API creates shared storage, avoiding prop drilling issues.
- State is data managed inside a component that changes over time.
- Props are read-only data passed from a parent to a child component.
- Hooks like `useState` give functional components memory and capabilities.
