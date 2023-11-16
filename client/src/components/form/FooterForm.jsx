import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterForm = ({ text, path, link }) => {
	return (
		<div className="text-sm">
			{text}
			<Link to={path}>
				<span className="text-indigo-700 ms-1 font-bold">{link}</span>
			</Link>
		</div>
	);
};

export default FooterForm;

FooterForm.propTypes = {
	text: PropTypes.string,
	path: PropTypes.string,
	link: PropTypes.string,
};
