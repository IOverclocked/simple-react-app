import React, {
	ChangeEvent,
	ReactElement,
	useState,
	useEffect,
	useCallback,
} from 'react'
import { useHistory } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { GamesIcon, HomeIcon } from 'src/shared'

const Navigate = (): ReactElement => {
	const [route, setRoute] = useState<string>('')

	const history = useHistory()

	const handleChange = useCallback(
		(event: ChangeEvent<unknown>, newValue: string): void => {
			setRoute(newValue)
		},
		[],
	)

	useEffect(() => {
		history.push(`/${route}`)
	}, [route, history])

	return (
		<BottomNavigation value={route} onChange={handleChange}>
			<BottomNavigationAction label="Home" value="" icon={<HomeIcon />} />
			<BottomNavigationAction
				label="Games"
				value="games"
				icon={<GamesIcon />}
			/>
		</BottomNavigation>
	)
}

export { Navigate }
