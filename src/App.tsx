import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { store } from 'src/store/store'
import { Header } from 'src/layout/Header'
import { Body } from 'src/layout/Body'
import { Footer } from 'src/layout/Footer'
import { GlobalStyles, theme } from 'src/styles'
import { Routes } from 'src/Routes'

const App = (): React.ReactElement => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<BrowserRouter>
					<Header />
					<Body>
						<Routes />
					</Body>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	)
}

export default App
