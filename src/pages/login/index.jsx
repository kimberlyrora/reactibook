import React from 'react';
import TextField from '@material-ui/core/TextField';


const Login = () => {
	return (
		<>
		  <TextField 
		  required 
		  id='standard-required' 
		  label='Usuario' 
		  />
		  <TextField 
		  required 
		  id='standard-required' 
		  label='Password' 
		  />
}		</>
	);
};

export default Login;