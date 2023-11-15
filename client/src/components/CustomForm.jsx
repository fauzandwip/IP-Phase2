import PropTypes from 'prop-types';

const CustomForm = ({ onSubmit, addClassName, children }) => {
	return (
		<form
			className={`flex flex-row flex-wrap gap-4 justify-center items-center w-3/4 px-10 py-14 border-indigo-500 rounded-xl shadow-indigo-500 bg-white/90 backdrop-blur-md ease-in-out delay-100 hover:shadow-inner hover:shadow-indigo-500 transition ${addClassName}`}
			onSubmit={onSubmit}
		>
			{children}
		</form>
	);
};

export default CustomForm;

CustomForm.propTypes = {
	onSubmit: PropTypes.func,
	addClassName: PropTypes.string,
	children: PropTypes.any,
};
