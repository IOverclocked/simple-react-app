import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import { GamesPage } from './GamesPage'

const Games = (): React.ReactElement => {
	const { url } = useRouteMatch()

	return <Route exact path={url} component={GamesPage} />
}

export { Games }
