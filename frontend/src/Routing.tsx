import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"></Route>
			</Switch>
		</Router>
	);
};

export default Routing;
