import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Home } from "./Home";
import { Exercises } from "./Exercises";


export const App: React.FC = () => {
	return <div>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path ="/login" element={<Login />} /> 
				<Route path="/profile" element={<Profile />} /> 
				<Route path="/exercises" element={<Exercises />} /> 
				
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
