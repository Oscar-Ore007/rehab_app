import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Login: React.FC = () => {
	return (
		<Box>
			<AccountCircleIcon />
            <Typography sx={{
                margin: '1rem 1rem 1rem 1rem'
            }}
            >Login Page
            </Typography>

            <TextField
            >
                UserName
            </TextField>
		</Box>
	);
};
