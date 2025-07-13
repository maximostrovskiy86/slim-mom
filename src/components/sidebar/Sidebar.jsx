import React from "react";
import {useSelector} from "react-redux";
import {SideBarContainer} from "./Sidebar.styled";
import {SummaryItem} from "../rightSideBar/RightSideBar.styled";
import {getUserData, getUseCalculateDaySummary} from "../../redux/user/userSelectors";
import Container from "../container";


const Sidebar = () => {
    const userTodaySummary = useSelector(getUseCalculateDaySummary);
    const userIsLoginDailyRate = useSelector(getUserData);
    const {kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate, date} = userTodaySummary;

    return (
        <SideBarContainer className="sidebar">
            <Container>
                <h3>Summary for date {date}</h3>
                <SummaryItem><span>Calories left to consume</span><span>{Math.round(kcalLeft) || 0} kcal</span></SummaryItem>
                <SummaryItem><span>Calories consumed</span><span>{Math.round(kcalConsumed) || 0} kcal</span></SummaryItem>
                <SummaryItem><span>Daily Rate</span><span>{(dailyRate && dailyRate) || 0} kcal</span></SummaryItem>
                <SummaryItem><span>% Of Daily Rate</span><span>{Math.round(percentsOfDailyRate) || 0} kcal</span></SummaryItem>
                <h3>Not recommended products</h3>
                <ul className="notAllowedProducts">
                    {userIsLoginDailyRate && userIsLoginDailyRate.notAllowedProducts.slice(0, 5).map((product, index) => {
                        return <li key={product}>{index + 1}. {product}</li>
                    })}
                </ul>
            </Container>
        </SideBarContainer>
    )
}

export default Sidebar;