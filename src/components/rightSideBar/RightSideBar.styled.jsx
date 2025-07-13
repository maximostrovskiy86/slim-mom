import styled from "@emotion/styled";


export const RightSideBarContainer = styled.aside`
    background-color: ${p => p.theme.colors.background};
	padding-top: ${p => p.theme.space[6]}px;
	padding-bottom: ${p => p.theme.space[6]}px;
    color: ${p => p.theme.colors.primary};
	
    h3 {
		margin-bottom: ${p => p.theme.space[4]}px;
        font-weight: ${p => p.theme.fontWeights.bold};
		font-size: ${p => p.theme.fontSizes.sm};
		color: ${p => p.theme.colors.secondary};
    }
	
	h3:last-of-type {
		margin-top: ${p => p.theme.space[5]}px;
	}
	
	.notAllowedProducts {
		li {
            font-weight: ${p => p.theme.fontWeights.normal};
            margin-top: ${p => p.theme.space[2]}px;
        }
	}
	
	@media screen and (min-width: 1200px){
        padding-bottom: 0;
    }
`;

export const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
    margin-top: ${p => p.theme.space[2]}px;
    
    
    font-weight: ${p => p.theme.fontWeights.normal};
`;

