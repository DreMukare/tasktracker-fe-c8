import AddTaskForm from './AddTaskForm';
import TaskItem from './TaskItem';
import useTaskStore from '../stores/task';
import useQuoteStore from '../stores/quote';
import useQuotes from '../hooks/quotes';
import { useEffect } from 'react';
import useTheme from '../stores/theme';

const TaskList = () => {
	const { tasks, deleteTask } = useTaskStore();
	const { h1Styling, h4Styling, pStyling } = useTheme();

	useEffect(() => {
		useQuotes();
	}, []);

	const { quoteOfTheDay } = useQuoteStore();

	return (
		<div>
			<h2 className={`${h1Styling} text-center my-[2em]`}>Task List</h2>
			{quoteOfTheDay[0] && (
				<div className="mx-auto text-center mb-[2em]">
					<p className={`${pStyling} text-xl`}>{quoteOfTheDay[0]['q']}</p>
					<h4 className={h4Styling}>~ {quoteOfTheDay[0]['a']}</h4>
				</div>
			)}
			<AddTaskForm />
			<ul className="mx-auto my-[2em] max-w-[60vw]">
				{tasks.map((task, idx) => {
					return <TaskItem key={idx} task={task} />;
				})}
			</ul>
		</div>
	);
};

export default TaskList;
