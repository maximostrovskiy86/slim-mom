import styled from "@emotion/styled";

export const DiaryDateCalendarContainer = styled.div`
    position: relative;
	display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 30px;
	
    .datePicker {
        width: 125px;
        
        font-weight: 700;
        font-size: 18px;
        text-align: center;
		
        border-color: transparent;
        cursor: pointer;
    }
	
	.datePickerLogo {
        position: absolute;
        top: 4px;
        left: 125px;
        width: 20px;
    }
`;