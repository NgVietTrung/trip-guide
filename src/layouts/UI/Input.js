const Input = (props) => {
	return (
		<input
			type={props.type ? props.type : 'text'}
			onBlur={props.onBlur}
			onChange={props.onChange}
			autoComplete="off"
			value={props.value ? props.value : ''}
			disabled={props.disabled ? props.disabled : false}
			placeholder={props.placeholder ? props.placeholder : ''}
			className={`rounded-[10px] outline-none focus:outline-none focus:border-transparent focus:ring-0 w-full ${
				props.className
			} ${props.err ? 'border-[#EB5757] !border-solid border-2 focus:border-[#EB5757]' : ''}`}
		/>
	);
};

export default Input;
