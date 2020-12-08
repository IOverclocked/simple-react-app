import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import { Games } from './Games'

const GamesPage = (): React.ReactElement => {
	const { url } = useRouteMatch()

	return <Route exact path={url} component={Games} />
}

export { GamesPage }
