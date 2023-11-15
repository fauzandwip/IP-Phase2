// import PropTypes from 'prop-types';
import BoardMessage from './BoardMessage';

const BodyChat = () => {
	const dummyMessages = [
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
		'Hello, Iam jack Sparrroww',
	];

	return (
		<div className="chat-section w-full h-full p-4 flex flex-col gap-2 overflow-y-auto scrollbar-hide bg-blue-sec">
			{dummyMessages.map((message, idx) => {
				return <BoardMessage key={idx} message={message} />;
			})}
		</div>
	);
};

export default BodyChat;

// BodyChat.propTypes = {
// 	message: PropTypes.string,
// };
