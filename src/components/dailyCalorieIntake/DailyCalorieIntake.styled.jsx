import styled from "@emotion/styled";

export const DailyCalorieIntakeContainer = styled.div`
    
    .calories {
        padding-top: 40px;
        padding-bottom: 40px;
        
        font-size: 36px;
        font-weight: 900;
        text-align: center;
        
        color: #264061;
        
        border-bottom: 1px solid #D9D9D9;
        
        span {
            font-size: 18px;
        }
    }
    
    h2 {
        padding-top: 25px;
        padding-bottom: 25px;
        
        font-size: 14px;
        font-weight: 900;
        text-align: center;
    }
`;

export const DailyCalorieIntakeList = styled.ul`
    margin-bottom: 45px;
	
    
    li + li {
        margin-top: 20px;
    }
    
    li {
        font-weight: 300;
        color: #9B9FAA;
    }
	
	@media screen and (min-width: 768px){
        margin-bottom: 15px;
    }
`;