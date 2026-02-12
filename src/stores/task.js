import { create } from 'zustand';

const initState = {
	tasks: [],
};

const useTaskStore = create((set) => ({
	...initState,
	createTask: (task) =>
		set((state) => ({
			tasks: [task, ...state.tasks],
		})),
	toggleTaskCompleteness: (id) =>
		set((state) => {
			const currentTaskIdx = state.tasks.findIndex((task) => task.id === id);
			const updatedTask = {
				...state.tasks[currentTaskIdx],
				done: !state.tasks[currentTaskIdx].done,
			};
			const newTaskList = state.tasks.filter((task) => {
				return task.id !== id;
			});

			return {
				tasks: [updatedTask, ...newTaskList],
			};
		}),
	editTask: (id, newTaskText) =>
		set((state) => {
			const currentTaskIdx = state.tasks.findIndex((task) => task.id === id);
			const updatedTask = {
				...state.tasks[currentTaskIdx],
				description: newTaskText,
			};
			const newTaskList = state.tasks.filter((task) => {
				return task.id !== id;
			});

			return {
				tasks: [updatedTask, ...newTaskList],
			};
		}),
	deleteTask: (id) =>
		set((state) => {
			const newTaskList = state.tasks.filter((task) => {
				return task.id !== id;
			});

			return {
				tasks: newTaskList,
			};
		}),
}));

export default useTaskStore;
