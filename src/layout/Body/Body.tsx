import React, { ReactElement, ReactNode } from 'react'
import { Container } from '@material-ui/core'
import styled from 'styled-components'

const StyledBody = styled(Container)`
	border: 1px solid ${({ theme }) => theme.color.yellow};
`

interface IPropsBody {
	children: NonNullable<ReactNode>
}

const Body = (props: IPropsBody): ReactElement => {
	const { children } = props

	return <StyledBody>{children}</StyledBody>
}

export { Body }
