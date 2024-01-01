import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Home } from "./Home";


export const App: React.FC = () => {
	return <div>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path ="/login" element={<Login />} /> 
				<Route path ="/profile" element={<Profile /> } /> 
				
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
