import { forwardRef } from 'react';

const Input = (props, ref) => {
	return <input ref={ref} {...props} />;
};
export default forwardRef(Input);
