import styled from "@emotion/styled";


export const SharedLayoutStyled = styled.main`
    display: flex; /*footer bottom*/
    min-height: 100vh;
    flex-direction: column;

    .container { /*footer bottom*/
        flex: 1;
    }
    
    .container {
        @media screen and (min-width: 1200px) {
            display: flex;
			
            > div {
                flex-basis: 60%;
				padding-top: 85px;
            }

            > aside {
                flex-basis: 40%;
				padding-top: 125px;
                padding-left: 80px;
                padding-right: 50px;
				margin-left: 20px;
            }
        }
    }
`;