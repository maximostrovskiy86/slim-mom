import styled from "@emotion/styled";

/*font-family: ${({ theme }) => theme.font.family};*/

export const HeadTitleStyle = styled.h1`
	padding-top: 25px;
	padding-bottom: 25px;
	
    font-size: 18px;
	line-height: 26px;
	text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    text-align: left;
    
    @media screen and (min-width: 768px) {
        font-size: 30px;
    }
`;