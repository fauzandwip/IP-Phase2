import { useState } from 'react';
import BoardChat from './BoardChat';
import InputChat from './chat/InputChat';

const SideBar = () => {
	const [search, setSearch] = useState('');

	return (
		<div className="side-bar w-1/3 min-h-full flex flex-col p-4 gap-6 bg-white-primary border-x">
			<h3 className="title text-2xl font-black">Chats</h3>
			<InputChat
				value={search}
				placeholder={'Search'}
				addClassName={'p-3 w-full'}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>

			{/* chats */}
			<div className="list-chats flex flex-col gap-4">
				<h3 className="ms-2 font-medium text-sm text-slate-500">All Chats</h3>
				<BoardChat
					imageUrl={'https://imgur.com/4gaSugI.jpg'}
					chatName={'Patito'}
					textMsg={'Jack Sparrow here'}
					bgColor={'bg-white'}
					color={'text-slate-800'}
				/>
				<BoardChat
					imageUrl={'https://imgur.com/4gaSugI.jpg'}
					chatName={'Patito'}
					textMsg={'Jack Sparrow here'}
					bgColor={'bg-blue-primary'}
					color={'text-slate-100'}
				/>
			</div>
		</div>
	);
};

export default SideBar;
