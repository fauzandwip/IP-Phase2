import PropTypes from 'prop-types';

const CustomInput = ({
	type = 'text',
	id,
	value,
	addClassName,
	placeholder,
	onChange,
}) => {
	return (
		<input
			type={type}
			name=""
			id={id}
			value={value}
			className={`w-full py-2 px-4 rounded-md bg-indigo-400 placeholder-slate-300 box-border text-slate-100 ${addClassName}`}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

export default CustomInput;

CustomInput.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	addClassName: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};
