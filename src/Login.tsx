import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export const Login: React.FC = () => {
	return (
        <Card
            variant="elevation"
			sx={{
				margin: "1rem 1rem 1rem 1rem",
				padding: "5rem 1rem 25rem 1rem",
			}}
		>
			<AccountCircleIcon fontSize="large"/>
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

				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end", // Align buttons to the far right
						gap: 2, // Optional: Add some spacing between buttons
						margin: "1rem -37.5rem 1rem 1rem",
					}}
				>
					<Button variant='outlined'>Clear</Button>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "blue",
							color: "white",
						}}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</Card>
	);
};
