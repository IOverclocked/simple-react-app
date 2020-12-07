import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
	width: 100%;
	height: 100px;
	color: ${({ theme }) => theme.color.white };
	border: 5px solid ${({ theme }) => theme.color.yellow };
	background-color: ${({ theme }) => theme.color.blue };
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
`

const Footer = (): ReactElement => {
	return (
		<StyledFooter>
			Footer
		</StyledFooter>
	)
}

export { Footer }
