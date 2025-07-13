import styled from "@emotion/styled";
import {LoginFormContainer} from "../loginForm/LoginForm.styled";


export const DiaryAddProductFormContainer = styled(LoginFormContainer)`
    padding-top: 70px;
    
    .add-product-item {
        width: 100%;
    }
    
    button {
        margin: 60px auto 0 auto;
    }
    
    @media screen and (min-width: 768px) {
        max-width: 475px;
        padding-top: 50px;
        padding-bottom: 15px;
        display: flex;
        justify-content: space-between;
        
        .add-product-item:first-of-type {
            flex-basis: 45%;
        }
        
        .add-product-item:last-of-type {
            flex-basis: 30%;
        }
        
        button {
            margin: 0 0 0 20px;
        }
    }
    
    @media screen and (min-width: 1200px) {
        max-width: 500px;
        
        button {
            margin: 0 0 0 30px;
        }
	}
`;