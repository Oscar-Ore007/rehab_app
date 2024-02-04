import React from "react";
import { Box, Card, CardContent, Typography, Paper } from "@mui/material";
import { Sidebar } from "./Sidebar";

export const Profile: React.FC = () => {
	return (
		<Box mt={4} mx={2} display='flex' justifyContent='start'>
			<Paper elevation={3}>
				<Card>
					<CardContent>
						<Typography variant='h5' component='div' gutterBottom></Typography>
						<Typography variant='body1' color='textSecondary'>
							Welcome to your profile! Customize this page with your profile
							information.
						</Typography>
						{/* Add your profile information or components here */}
					</CardContent>
				</Card>
			</Paper>
		</Box>
	);
};
