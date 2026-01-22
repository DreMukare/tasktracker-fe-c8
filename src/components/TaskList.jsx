import './TaskList.css';
import AddTaskForm from './AddTaskForm';
import useTaskStore from '../stores/task';

const TaskList = () => {
	const { tasks, deleteTask } = useTaskStore();
	console.log('TASKS', tasks);

	return (
		<div className="task-list-container">
			<h2>Task List</h2>
			<AddTaskForm />
			<ul className="task-list">
				{tasks.map((task, idx) => {
					return (
						<li className="task-item" key={task.id}>
							{task.description}{' '}
							<button onClick={() => deleteTask(task.id)}>🗑️</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TaskList;
