import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
// import Collapse from '@material-ui/core/Collapse'
// import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import {
	FavoriteIcon,
	ShareIcon,
	// ExpandMoreIcon,
	// MoreVertIcon,
} from 'src/shared/icons'

const CardStyled = styled(Card)`
	flex-grow: 1;
	flex-basis: 312px;
	margin: 12px;
`
const CardHeaderStyled = styled(CardHeader)`
	background-color: ${({ theme }) => theme.color.blue};

	span:nth-of-type(1) {
		color: ${({ theme }) => theme.color.yellow};
	}

	span:nth-of-type(2) {
		color: ${({ theme }) => theme.color.white};
		font-weight: bold;
	}
`

interface ICardComponentProps {
	title: string
	subheader: string
	image?: string
	description?: string
}

const CardComponent = (props: ICardComponentProps): ReactElement => {
	const { title, subheader, image, description } = props

	return (
		<CardStyled>
			<CardHeaderStyled title={title} subheader={subheader} />
			<CardMedia image={image} title={title} />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				{/* <IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton> */}
			</CardActions>
		</CardStyled>
	)
}

CardComponent.defaultProps = {
	image: '',
	description: 'Description is empty',
}

export { CardComponent }
