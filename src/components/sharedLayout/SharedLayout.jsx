import React, {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {SharedLayoutStyled} from "./SharedLayout.styled";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import LoadingSpinner from "../loadingSpinner";
import Header from "../header";
import RightSideBar from "../rightSideBar";
import SideBar from "../sidebar";
import {getIsOpenModal} from "../../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";
import Container from "../container";
import {useMediaPredicate} from "react-media-hook";


const SharedLayout = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	const isShowModal = useSelector(getIsOpenModal);
	const biggerThan1200 = useMediaPredicate("(min-width: 1200px)");
	
	return (
		<>
			<Header/>
			<Suspense fallback={<LoadingSpinner/>}>
				<SharedLayoutStyled>
					{biggerThan1200 ?
						<>
							<Container>
								<div className="main-content">
									<Outlet/>
								</div>
								{isLoggedIn && !isShowModal && <RightSideBar/>}
							</Container>
						</>
						:
						<>
							<Container>
								<Outlet/>
							</Container>
							{isLoggedIn && !isShowModal && <SideBar/>}
						</>
					}
				</SharedLayoutStyled>
			</Suspense>
		</>
	);
};

export default SharedLayout;