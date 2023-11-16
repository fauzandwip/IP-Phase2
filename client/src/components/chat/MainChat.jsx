// import PropTypes from 'prop-types';
import BodyChat from './BodyChat';
import FooterChat from './FooterChat';
import HeaderChat from './HeaderChat';

const MainChat = () => {
	return (
		<div className="chat w-full h-full flex flex-col">
			<HeaderChat imageUrl={'https://imgur.com/4gaSugI.jpg'} text={'Tortuga'} />
			<BodyChat />
			<FooterChat />
			{/* <FooterChat message={message} setMessage={setMessage} /> */}
		</div>
	);
};

export default MainChat;

// BodyChat.propTypes = {
// 	message: PropTypes.string,
// };
