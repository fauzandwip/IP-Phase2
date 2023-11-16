// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import BoardMessage from './BoardMessage';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';

const BodyChat = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const unSub = onSnapshot(
			doc(db, 'chats', import.meta.env.VITE_REACT_APP_TORTUGA_CHANNEL_ID),
			(doc) => {
				doc.exists() && setMessages(doc.data().messages);
			}
		);

		return () => {
			unSub();
		};
	}, []);

	return (
		<div className="chat-section w-full h-full p-4 flex flex-col mt-auto gap-2 overflow-y-scroll scrollbar-hide bg-blue-sec">
			{messages &&
				messages.map((message, idx) => {
					return <BoardMessage key={idx} data={message} />;
				})}
		</div>
	);
};

export default BodyChat;

// BodyChat.propTypes = {
// 	message: PropTypes.string,
// };
