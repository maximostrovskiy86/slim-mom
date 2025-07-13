import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    min-width: 176px;
    padding-top:${props => props.theme.space[3]}px;
    padding-bottom:${props => props.theme.space[3]}px;
    margin: ${props => props.theme.space[0]} auto;
    
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.sm};
    line-height: ${props => props.theme.lineHeights.medium};
    text-align: center;
    letter-spacing: 0.04em;
    
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.text};
    border: ${props => props.theme.borders.medium} solid ${props => props.theme.colors.accent};
    border-radius: ${props => props.theme.borderRadius.halfRounded};
    outline: none;
    
    cursor: pointer;
    transition: box-shadow 250ms ease-in;
    
    &:hover {
        box-shadow: 0 4px 10px rgba(252, 132, 45, 0.5);
    }
    
    &:active {
        background-color: #f37820;
    }
`;


