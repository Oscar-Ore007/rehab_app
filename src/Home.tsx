import { Paper } from "@mui/material";
import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const Home: React.FC = () => {
	return (
		<Paper>
			<Sidebar />
			<Navbar />
		</Paper>
	);
};
