import PropTypes from 'prop-types';

const BoardChat = ({ imageUrl, chatName, textMsg, bgColor, color }) => {
	return (
		<div
			className={`flex flex-row p-3 gap-3 rounded-3xl justify-start items-center ${bgColor}`}
		>
			<div className="img w-12 h-12 rounded-full">
				<img
					src={imageUrl}
					alt="profile"
					className="rounded-full border border-slate-100"
				/>
			</div>
			<div className="flex flex-col items-start">
				<div className={`text-lg font-semibold ${color}`}>{chatName}</div>
				<div className={`text-sm ${color}`}>{textMsg}</div>
			</div>
		</div>
	);
};

export default BoardChat;

BoardChat.propTypes = {
	imageUrl: PropTypes.string,
	chatName: PropTypes.string,
	textMsg: PropTypes.string,
	bgColor: PropTypes.string,
	color: PropTypes.string,
};
