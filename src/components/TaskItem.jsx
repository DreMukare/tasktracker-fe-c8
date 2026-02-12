import { useState } from 'react';
import useTaskStore from '../stores/task';
import { Button } from '../../components/ui/button';
import { Edit, Trash } from 'lucide-react';
import { Input } from '../../components/ui/input';

const TaskItem = (props) => {
	const { task } = props;
	const [currentTask, setCurrentTask] = useState('');
	const [editMode, setEditMode] = useState(false);
	const { deleteTask, editTask, toggleTaskCompleteness } = useTaskStore();

	return (
		<li className="flex justify-between items-center mx-3 my-5">
			<div className="flex gap-5 items-center w-[80%]">
				{!editMode && (
					<input
						type="checkbox"
						name={`task-done-${task.id}`}
						id={`task-done-${task.id}`}
						checked={task.done}
						onChange={(e) => toggleTaskCompleteness(task.id)}
					/>
				)}
				{editMode ? (
					<Input
						className={'w-full'}
						type="text"
						name={task.id}
						id={task.id}
						placeholder={task.description}
						value={currentTask}
						onChange={(e) => setCurrentTask(e.target.value)}
					/>
				) : (
					<p className={`${task.done && 'line-through'}`}>{task.description}</p>
				)}
			</div>
			<div>
				{!editMode && (
					<Button
						variant="outline"
						size="icon"
						onClick={() => {
							setCurrentTask('');
							return setEditMode(!editMode);
						}}
					>
						<Edit />
					</Button>
				)}
				{!editMode && (
					<Button
						variant="outline"
						size="icon"
						onClick={() => deleteTask(task.id)}
					>
						<Trash />
					</Button>
				)}
				{editMode && (
					<Button
						variant="secondary"
						onClick={() => {
							setEditMode(false);
							return editTask(task.id, currentTask);
						}}
					>
						Save Task Edit
					</Button>
				)}
			</div>
		</li>
	);
};

export default TaskItem;
