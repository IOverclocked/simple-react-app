import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import { HomePage } from './HomePage'

const Home = (): React.ReactElement => {
	const { url } = useRouteMatch()

	return <Route exact path={url} component={HomePage} />
}

export { Home }
