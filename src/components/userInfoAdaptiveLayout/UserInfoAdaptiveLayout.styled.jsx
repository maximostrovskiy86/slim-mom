import styled from "@emotion/styled";

export const UserInfoAdaptiveLayoutContainer = styled.div`
	margin-left: auto;
	padding-right: ${props => props.theme.space[2]}px;
	
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
	
	@media screen and (min-width: 1200px) {
		order: 2;
		padding-right: 0;
    }
`;