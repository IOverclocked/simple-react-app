import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HomePage } from 'src/pages/home'
import { GamesPage } from 'src/pages/games'

const Routes = (): React.ReactElement => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/games" component={GamesPage} />
		</Switch>
	)
}

export {
	Routes
}
