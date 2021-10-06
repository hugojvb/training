import { ThemeProvider, AppBar, Toolbar, Typography } from "@mui/material";
import theme from "./styles/theme";
import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	return (
		<CacheProvider value={createCache({ key: "css" })}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<AppBar position="sticky" color="primary">
						<Toolbar>
							<Typography variant="h6">Hello</Typography>
						</Toolbar>
					</AppBar>
					<h1>Ready to go!</h1>
				</div>
				<CssBaseline />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
