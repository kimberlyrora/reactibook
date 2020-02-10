import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  const [state, setState] = useState({
		user: '',
		password: '',
		errEmail: false,
		errPassword: false,
	});

	const {user, password, errEmail, errPassword} = state;

	const settingState = (name, value) => setState({
		...state,
		[name]: value
	});

	const onBlur = e => {
		const { target: { pattern, value, name } } = e;

		const validation = RegExp(pattern).test(value);
		const isUser = name === 'user';

		if(validation) {
			isUser ? 
			settingState('errEmail', false) 
			: settingState('errPassword', true); 
		} else {
			isUser ?
			settingState('errEmail', true) 
			: settingState('errPassword', false);
		}
	};

	const onChange = e => {
		const { target: { name , value } } = e;
		settingState(name, value);
	};

	const emptyUndefNull = prop => ['', undefined, null].some(e => e === prop); 
	
	const disabled = emptyUndefNull(user) 
									 || emptyUndefNull(password) 
									 || errEmail 
									 || errPassword;

	const onClick = e => {
		console.log('e', e);
		console.log('form', state);
		

	};

	return (
		<form>
			<TextField
			required
			name='user'
			value={user}
			label='Usuario'
			onBlur={onBlur}
			error={errEmail}
			onChange={onChange}
			helperText={errEmail ? 'Entrada inválida.' : null}
		  inputProps={{ 
			  pattern: '^[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]{1,63})*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.){1,63}[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9]){1,63}?$',
				minLength: 5,
				maxLength: 189
			}}
		  />
		  <TextField
			  required
				name='password'
				type='password'
				value={password}
				label='Contraseña'
				onBlur={onBlur}
				error={errPassword}
				onChange={onChange}
				helperText={errPassword ? 'Entrada inválida.' : null}
				inputProps={{ 
					pattern: '[\\s]',
					minLength: 3,
					maxLength: 100
				}}
      />
			<button 
				disabled={disabled}
				onClick={onClick}
			>
				Ingresar
			</button>
	</form>
	);
};

export default Login;