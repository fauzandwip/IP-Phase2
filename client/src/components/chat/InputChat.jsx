import PropTypes from 'prop-types';

const InputText = ({ value, addClassName, placeholder, onChange }) => {
	return (
		<input
			type="text"
			name=""
			value={value}
			className={`type-bar rounded-xl flex items-center px-4 bg-blue-sec text-md text-blue-primary placeholder-blue-primary ring-0 outline-0 ${addClassName}`}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
};

export default InputText;

InputText.propTypes = {
	value: PropTypes.string,
	addClassName: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};
