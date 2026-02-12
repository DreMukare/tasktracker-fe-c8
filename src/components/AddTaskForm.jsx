import { useState } from 'react';
import useTaskStore from '../stores/task';
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

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
		<form
			className="mx-auto my-[2em] max-w-[50vw] flex justify-between gap-5 items-center"
			onSubmit={handleSubmit}
		>
			<Input
				type="text"
				placeholder="Enter new task"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<Button variant="outline" type="submit">
				Add Task
			</Button>
		</form>
	);
};

export default AddTaskForm;
