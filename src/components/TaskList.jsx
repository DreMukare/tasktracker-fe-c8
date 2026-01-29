import './TaskList.css';
import AddTaskForm from './AddTaskForm';
import useTaskStore from '../stores/task';
import useQuoteStore from '../stores/quote';
import useQuotes from '../hooks/quotes';
import { useEffect } from 'react';

const TaskList = () => {
	const { tasks, deleteTask } = useTaskStore();

	useEffect(() => {
		useQuotes();
	}, []);

	const { quoteOfTheDay } = useQuoteStore();

	return (
		<div className="task-list-container">
			<h2>Task List</h2>
			{quoteOfTheDay[0] && (
				<div className="quote-container">
					<p>{quoteOfTheDay[0]['q']}</p>
					<h3>~ {quoteOfTheDay[0]['a']}</h3>
				</div>
			)}
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
