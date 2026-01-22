import { useState } from 'react';
import './TaskList.css';
import useTaskStore from '../stores/task';
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = () => {
	const { createTask } = useTaskStore();
	const [task, setTask] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			createTask({
				id: uuidv4(),
				title: '',
				description: task,
			});
		} catch (err) {
			console.err('Failed to create a new task: ', err);
		}
		setTask('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter new task"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default AddTaskForm;
