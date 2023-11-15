import PropTypes from 'prop-types';

const HeaderChat = ({ imageUrl, text }) => {
	return (
		<div className="chat-header h-max py-3 px-8 flex justify-start items-center bg-white-primary">
			<div className="profile flex flex-row gap-2 justify-center items-center">
				<div className="img w-12 h-12 rounded-full">
					<img src={imageUrl} alt="profile" className="rounded-full" />
				</div>
				<div className="text-xl font-semibold">{text}</div>
			</div>
		</div>
	);
};

export default HeaderChat;

HeaderChat.propTypes = {
	imageUrl: PropTypes.string,
	text: PropTypes.string,
};
