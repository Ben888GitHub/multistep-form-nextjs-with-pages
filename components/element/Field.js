import Error from './Error';

const Field = ({ children, label, error, columnSize }) => {
	return (
		<div className={columnSize}>
			<label className="block text-sm font-medium leading-6 text-gray-900">
				{label}
			</label>
			<div className={`mt-2`}>{children}</div>
			{error && <Error message={error.message} />}
		</div>
	);
};

export default Field;
