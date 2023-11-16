import PropTypes from 'prop-types';

const Title = ({ addClassName, children }) => {
	return (
		<div
			className={`mb-4 p-2 bg-clip-text text-transparent bg-blue-primary ${addClassName}`}
		>
			{children}
		</div>
	);
};

export default Title;

Title.propTypes = {
	addClassName: PropTypes.string,
	children: PropTypes.any,
};
