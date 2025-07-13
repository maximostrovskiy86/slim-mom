import styled from "@emotion/styled";

export const DiaryProductItem = styled.li`
    display: flex;
    align-items: center;


    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.medium};
    color: ${props => props.theme.colors.primary};
    
    span {
		display: flex;
		align-items: center;
        height: 35px;
        padding-top: ${p => p.theme.space[1]}px;
        padding-bottom: ${p => p.theme.space[1]}px;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        text-align: center;
    }
    
    .title {
        flex-basis: 50%;
        margin: 0 ${p => p.theme.space[2]}px;
        text-align: left;
    }
    
    .weight {
        flex-basis: 20%;
    }
    
    .kcal {
        flex-basis: 30%;
        margin-left: ${p => p.theme.space[2]}px;
    }
    
    .icon-cross {
        cursor: pointer;
		margin-left: 10px;
		margin-right: 10px;
    }
`;