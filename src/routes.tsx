import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from 'src/pages/home'
import { Games } from 'src/pages/games'

const Routes = (): React.ReactElement => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/games" component={Games} />
		</Switch>
	)
}

export {
	Routes
}
