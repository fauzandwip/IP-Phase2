import PropTypes from 'prop-types';

const ButtonSubmit = ({ addClassName, value }) => {
	return (
		<input
			type="submit"
			value={value}
			className={`w-full py-2 px-4 mt-8 rounded-md hover:cursor-pointer bg-gradient-to-r from-blue-primary to-indigo-400 placeholder-slate-300 box-border text-slate-100 hover:opacity-80 ${addClassName}`}
		/>
	);
};

export default ButtonSubmit;

ButtonSubmit.propTypes = {
	addClassName: PropTypes.string,
	value: PropTypes.string,
};
