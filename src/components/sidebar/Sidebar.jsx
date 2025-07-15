import React from "react";
import {useSelector} from "react-redux";
import {SideBarContainer} from "./Sidebar.styled";
import {SummaryItem} from "../rightSideBar/RightSideBar.styled";
import {getUserData, getUserDaySummary} from "../../redux/user/userSelectors";
import Container from "../container";


const Sidebar = () => {
    const userTodaySummary = useSelector(getUserDaySummary);
    const userIsLoginDailyRate = useSelector(getUserData);

    return (
        <SideBarContainer className="sidebar">
            <Container>
                <h3>Summary for date {userTodaySummary?.date}</h3>
                <SummaryItem><span>Calories left to consume</span><span>{Math.round(userTodaySummary?.kcalLeft) || 0} kcal</span></SummaryItem>
                <SummaryItem><span>Calories consumed</span><span>{Math.round(userTodaySummary?.kcalConsumed) || 0} kcal</span></SummaryItem>
                <SummaryItem><span>Daily Rate</span><span>{userTodaySummary?.dailyRate || 0} kcal</span></SummaryItem>
                <SummaryItem><span>% Of Daily Rate</span><span>{Math.round(userTodaySummary?.percentsOfDailyRate) || 0} kcal</span></SummaryItem>
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