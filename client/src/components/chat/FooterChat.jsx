// import PropTypes from 'prop-types';
import InputText from './InputChat';
import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../../context/AuthContext';
import { updateDoc, arrayUnion, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const FooterChat = () => {
	const [text, setText] = useState('');
	const { currentUser } = useContext(AuthContext);

	const handleOnSend = async (e) => {
		e.preventDefault();

		try {
			// console.log(text);
			// console.log(currentUser);
			await updateDoc(
				doc(db, 'chats', import.meta.env.VITE_REACT_APP_TORTUGA_CHANNEL_ID),
				{
					messages: arrayUnion({
						id: uuid(),
						text,
						senderId: currentUser.id,
						photoUrl: currentUser.photoUrl,
						date: Timestamp.now(),
					}),
				}
			);
			setText('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="chat-typing w-full h-20 bg-white-primary rounded-br-[35px]">
			<form
				onSubmit={handleOnSend}
				className="typing flex flex-row py-4 px-4 gap-4"
			>
				<InputText
					value={text}
					addClassName={'grow'}
					placeholder={'Write a message .....'}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<button
					type="submit"
					// onClick={handleOnSend}
					className="send w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-primary"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className="w-6 h-6 -rotate-45"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default FooterChat;

// FooterChat.propTypes = {
// 	message: PropTypes.string,
// 	setMessage: PropTypes.func,
// };
