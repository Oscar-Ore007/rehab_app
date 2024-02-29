import React from "react";
import { Card, Grid, Paper, Typography } from "@mui/material";

export const Exercises: React.FC = () => {
	return (
		<Grid>
			<Paper
				sx={{
					borderRadius: "50px",
				}}
			>
				<Card
					sx={{
						width: "100%",
						height: "100rem",
						borderRadius: "50px",
					}}
				>
					<Typography
						sx={{
							margin: "4rem",
						}}
					>
						Exercises
					</Typography>
					{/* //You could also probably make a grid  */}
				</Card>
			</Paper>
		</Grid>
	);
};
