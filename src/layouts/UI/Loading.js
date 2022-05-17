import React from 'react';

const Loading = (props) => {
	return (
		<div
			className={`border-[#353945] border-2 rounded-[50%] border-r-1 border-r-transparent border-l-1 border-l-transparent animate-spin ${props.className}`}
		></div>
	);
};

export default Loading;
