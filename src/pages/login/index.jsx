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

	const onChange = e => {
		const { target: { name , value } } = e;
		settingState(name, value);
	};

	const onBlur = e => {
		const { target: { pattern, value, name } } = e;

		const validation = RegExp(pattern).test(value);
		const isUser = name === 'user';

		if(validation) {
			isUser ? 
			settingState('errEmail', false) 
			: settingState(errPassword, false); 
		} else {
			isUser ?
			settingState('errEmail', true) 
			: settingState(errPassword, true);
		}
	};

	return (
		<>
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
					pattern: '[^\s]',
					maxLength: 100
				}}
      />
	</>
	);
};

export default Login;