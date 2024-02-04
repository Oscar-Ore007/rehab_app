import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
		setUsernameError(false);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		setPasswordError(false);
	};

	const handleSubmit = () => {
		username.trim() === "" && setUsernameError(true);
		password.trim() === "" && setPasswordError(true);

		if (username.trim() === "" || password.trim() === "") {
			return;
		}

		console.log("Username:", username);
		console.log("Password:", password);

		navigate("/home");
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
				justifyContent: "center",
			}}
		>
			<Box
				sx={{
					margin: "1rem 1rem 1rem 1rem",
					textAlign: "center",
				}}
			>
				<AccountCircleIcon fontSize='large' />
				<Typography>Login</Typography>
			</Box>
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
					<Button variant='outlined' onClick={handleClear}>
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
