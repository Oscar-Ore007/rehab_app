import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
		setUsernameError(false); // Reset the error when the user types
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		setPasswordError(false); // Reset the error when the user types
	};

	const handleSubmit = () => {
		// Perform validation using the logical AND operator
		username.trim() === "" && setUsernameError(true);
		password.trim() === "" && setPasswordError(true);

		// Check if either username or password is empty, and return if true
		if (username.trim() === "" || password.trim() === "") {
			return;
		}

		// Your logic for handling the form submission
		console.log("Username:", username);
		console.log("Password:", password);
	};

	const handleClear = () => {
		setUsername("");
		setPassword("");
		setUsernameError(false);
		setPasswordError(false);
	};

	return (
		<Card
			variant='elevation'
			sx={{
				margin: "1rem 1rem 1rem 1rem",
				padding: "5rem 1rem 25rem 1rem",
			}}
		>
			<AccountCircleIcon fontSize='large' />
			<Typography
				sx={{
					margin: "1rem 1rem 1rem 1rem",
				}}
			>
				Login Page
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<TextField
					label='Username'
					required
					error={usernameError}
					helperText={usernameError ? "Username is required" : ""}
					value={username}
					onChange={handleUsernameChange}
					sx={{
						width: "50rem",
						mb: 2,
					}}
				/>

				<TextField
					label='Password'
					type='password'
					required
					error={passwordError}
					helperText={passwordError ? "Password is required" : ""}
					value={password}
					onChange={handlePasswordChange}
					sx={{
						width: "50rem",
						mb: 2,
					}}
				/>

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						gap: 2,
						margin: "1rem -37.5rem 1rem 1rem",
					}}
				>
					<Button
						variant='outlined'
						onClick={handleClear}
					>
						Clear
					</Button>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "blue",
							color: "white",
						}}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</Card>
	);
};
