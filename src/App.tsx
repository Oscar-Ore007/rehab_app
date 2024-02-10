import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { UserProfile } from "./UserProfile";
import { Exercises } from "./Exercises";
import "./App.css";

export const App: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<UserProfile />} />
					<Route path='/UserProfile' element={<UserProfile />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/Exercises' element={<Exercises />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;


