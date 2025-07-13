import styled from "@emotion/styled";

export const UserInfoWrapper = styled.div`
	.container {
        display: flex;
        justify-content: end;
        align-items: center;
        height: 40px;
	}
    
    background-color: ${p => p.theme.colors.background};
	
	span {
		padding-left: ${props => props.theme.space[2]}px;
		padding-right: ${props => props.theme.space[2]}px;
		padding-top: ${props => props.theme.space[1]}px;
		padding-bottom: ${props => props.theme.space[1]}px;
        border-right: 2px solid ${props => props.theme.colors.primary};
    }
	
	button {
        font-size: ${p => p.theme.fontSizes.sm};
        font-weight: ${p => p.theme.fontWeights.bold};
		
		background-color: transparent;
		color: ${p => p.theme.colors.primary};
		outline: none;
		border: none;
		cursor: pointer;
	}
`;