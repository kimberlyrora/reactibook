import React from 'react';
import TextField from '@material-ui/core/TextField';


const Login = () => {
	return (
		<>
		  <TextField 
		  required 
		  id='standard-required' 
		  label='Usuario' 
		  inputProps={{ 
			// [^a-zA-Z0-9Ññ!#$%&*+/=?^_`{|}~-]
			  pattern: '/^[a-zA-Z0-9Ññ!#$%&\'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9Ññ!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/',
			  whiteSpace: true,
			  maxLength: 255
			}}
		  />
		  <TextField
          id='standard-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
	</>
	);
};

export default Login;