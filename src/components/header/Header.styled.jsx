import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
    position: relative;
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: 2px solid #E0E0E0;
	
	.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
	}
	
	@media screen and (min-width: ${p => p.theme.breakpoints.xl}){
        border: 0;
        
        .container {
            display: flex;
            justify-content: start;
			align-items: end;
        }
    }
`;