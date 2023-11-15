import PropTypes from 'prop-types';

const BoardMessage = ({ message }) => {
	return (
		<div className="message w-max py-2 px-4 text-white-primary rounded-2xl bg-blue-primary">
			<span>{message}</span>
		</div>
	);
};

export default BoardMessage;

BoardMessage.propTypes = {
	message: PropTypes.any,
};
