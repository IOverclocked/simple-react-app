import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

const App = (): React.ReactElement => {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	)
}

export default App
