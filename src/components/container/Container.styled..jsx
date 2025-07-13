import styled from "@emotion/styled";

export const DefaultContainer = styled.div`
    width: 290px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    
    @media screen and (min-width: 480px) {
        width: 450px;
    }
    
    @media screen and (min-width: 768px) {
        width: 600px;
    }
    
    @media screen and (min-width: 1200px) {
        width: 1050px;
    }

`