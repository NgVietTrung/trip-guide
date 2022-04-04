import React from 'react';

const Button = (props) => {
	return (
		<button
			className={`${props.className} flex items-center justify-center rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
