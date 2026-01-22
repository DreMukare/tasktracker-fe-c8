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
	editTask: (id, newTaskText) =>
		set((state) => {
			const currentTaskIdx = state.tasks.findIndex((task) => task.id === id);
			const updatedTask = {
				id: state.tasks[currentTaskIdx].id,
				title: state.tasks[currentTaskIdx].title,
				description: newTaskText,
			};

			return {
				tasks: [updatedTask, ...state.tasks],
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
