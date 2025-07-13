import styled from "@emotion/styled";


export const MainPageContainer = styled.section`
    position: relative;
	padding-bottom: ${p => p.theme.space[7]}px;
	
	@media screen and (min-width: ${p => p.theme.breakpoints.md}) {
        padding-top: ${p => p.theme.space[6]}px;
        padding-bottom: ${p => p.theme.space[0]}px;
    }
    
    .inner-head-panel {
        height: 40px;
        background-color: ${p => p.theme.colors.gray};
    }
`;