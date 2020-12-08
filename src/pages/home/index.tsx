import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

import { Home } from './Home'

const HomePage = (): React.ReactElement => {
	const { url } = useRouteMatch()

	return <Route exact path={url} component={Home} />
}

export { HomePage }
