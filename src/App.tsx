import "./App.css";
import { Login } from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Profile } from "./Profile";

export const App: React.FC = () => {
	return (
		<>
			<Login />
			{/* <Profile />  */}
		</>
	);
};
