import PropTypes from 'prop-types';

const InputText = ({ value, addClassName, placeholder, onChange }) => {
	return (
		<input
			type="text"
			name=""
			value={value}
			className={`type-bar grow rounded-xl flex items-center px-8 bg-blue-sec text-lg text-blue-primary placeholder-blue-primary ring-1 outline-1 ${addClassName}`}
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
