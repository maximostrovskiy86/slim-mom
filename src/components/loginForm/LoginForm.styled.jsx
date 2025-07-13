import styled from "@emotion/styled";
import {InputBox} from "../calculatorForm/CalculatorForm.styled";

export const LoginFormContainer = styled.form`
    padding-top: 80px;
    padding-bottom: 60px;
    
    @media screen and (min-width: 768px) {
        button {
            margin: 20px 0 0;
        }
    }
    
    button + button {
        margin-top: 20px;
        
        background-color: #ffffff;
        color: #FC842D;
        
        border: 2px solid #FC842D;
        transition: background-color 250ms ease-in-out;
    }
`;

export const LoginInputBox = styled(InputBox)`
	@media screen and (max-width: 768px) {
	margin: 0 auto;
	}
`;