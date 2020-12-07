import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'

const Routes = (): React.ReactElement => {
	return (
		<Switch>
			<Route path="/" component={HomePage} />
		</Switch>
	)
}

export default Routes
