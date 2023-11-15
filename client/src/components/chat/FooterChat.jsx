import PropTypes from 'prop-types';
import InputText from './InputChat';

const FooterChat = ({ message, setMessage }) => {
	return (
		<div className="chat-typing w-full h-20 bg-white-primary">
			<div className="typing flex flex-row py-4 px-4 gap-4">
				<InputText
					value={message}
					addClassName={'grow'}
					placeholder={'Write a message .....'}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
				<div className="send w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-primary">
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
				</div>
			</div>
		</div>
	);
};

export default FooterChat;

FooterChat.propTypes = {
	message: PropTypes.string,
	setMessage: PropTypes.func,
};
