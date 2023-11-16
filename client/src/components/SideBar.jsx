import { useState } from 'react';
import BoardChat from './BoardChat';
import InputChat from './chat/InputChat';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { db } from '../../firebase';
// import { AuthContext } from '../context/AuthContext';

const SideBar = () => {
	// const { currentUser } = useContext(AuthContext);
	const [search, setSearch] = useState('');
	// const [user, setUser] = useState(null);

	// const handleClick = async () => {
	// 	try {
	// 		const combineId = currentUser.uid > user;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// const fetchUser = async () => {
	// 	const q = query(collection(db, 'users'), where('username', '==', search));
	// 	console.log('fetch', search);

	// 	try {
	// 		const querySnapshot = await getDocs(q);
	// 		querySnapshot.forEach((doc) => {
	// 			setUser(doc.data());
	// 		});
	// 		console.log(querySnapshot);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// console.log(user, 'user');

	return (
		<div className="side-bar w-1/3 min-h-full flex flex-col p-4 gap-6 bg-white-primary border-x">
			<h3 className="title text-2xl font-black">Chats</h3>
			<InputChat
				value={search}
				placeholder={'Search'}
				addClassName={'p-3 w-full'}
				onChange={(e) => {
					setSearch(e.target.value);
					// fetchUser();
				}}
			/>

			{/* chats */}
			<div className="list-chats flex flex-col gap-4">
				<h3 className="ms-2 font-medium text-sm text-slate-500">All Chats</h3>
				<BoardChat
					imageUrl={'https://imgur.com/4gaSugI.jpg'}
					chatName={'Tortuga'}
					textMsg={'Jack Sparrow here'}
					bgColor={'bg-white'}
					color={'text-slate-800'}
				/>
			</div>
		</div>
	);
};

export default SideBar;
