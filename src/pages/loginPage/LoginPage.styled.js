import styled from "@emotion/styled";

export const LoginPageContainer = styled.div`
    padding-top: ${p => p.theme.space[7]}px;
    
    h1 {
        padding: ${p => p.theme.space[0]};
        color: ${p => p.theme.colors.accent};
    }
    
    @media screen and (max-width: 767px) {
		h1 {
            text-align: center;
        }
    }
`;