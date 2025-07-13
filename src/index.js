import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {ThemeProvider} from '@emotion/react'
import {theme} from "./theme";
import {persistor, store} from './redux/store';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<h2>...loading</h2>} persistor={persistor}>
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<App/>
					</ThemeProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);