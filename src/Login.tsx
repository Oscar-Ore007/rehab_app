import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Login: React.FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: "skyblue",
				margin: "1rem 1rem 1rem 1rem",
				padding: "5rem 1rem 25rem 1rem",
			}}
		>
			<AccountCircleIcon />
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
					alignItems: "center", // Center items vertically
				}}
			>
				<TextField
					label='Username'
					required
					sx={{
						width: "50rem",
						mb: 2,
					}}
				>
					UserName
				</TextField>

				<TextField
					label='Password'
					required
					sx={{
						width: "50rem",
						mb: 2,
					}}
				>
					Password
				</TextField>
			</Box>
		</Box>
	);
};
