import styled from "@emotion/styled";

export const DairyPageContainer = styled.div`
    padding-bottom: 50px;
    
    button {
        width: 50px;
        height: 50px;
        min-width: 0;
        padding: 0;
        align-items: center;
        border-radius: 50%;
    }
    
    @media screen and (min-width: 768px) {
        padding-bottom: 25px;
    }
    
    @media screen and (min-width: 1200px) {
        padding: 0;
    }
`;