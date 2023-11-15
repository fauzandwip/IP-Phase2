// import PropTypes from 'prop-types';
import { useState } from 'react';
import BodyChat from './BodyChat';
import FooterChat from './FooterChat';
import HeaderChat from './HeaderChat';

const MainChat = () => {
	const [message, setMessage] = useState('');

	return (
		<div className="chat w-full h-screen flex flex-col">
			<HeaderChat imageUrl={'https://imgur.com/4gaSugI.jpg'} text={'Patito'} />
			<BodyChat />
			<FooterChat message={message} setMessage={setMessage} />
		</div>
	);
};

export default MainChat;

// BodyChat.propTypes = {
// 	message: PropTypes.string,
// };
