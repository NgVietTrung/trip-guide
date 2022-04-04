import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return (
		<div
			className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-75"
			onClick={props.onToggle}
		/>
	);
};

const ModalOverlay = (props) => {
	return (
		<div
			className={`fixed top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-[90%] sm:w-[100%] max-w-[500px] z-30 rounded-[20px] bg-white px-[30px] py-[25px] ${props.className}`}
		>
			{props.children}
		</div>
	);
};

const ModalForm = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onToggle={props.onToggle} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay className={props.className}>{props.children}</ModalOverlay>,
				document.getElementById('overlay-root')
			)}
		</>
	);
};

export default ModalForm;
