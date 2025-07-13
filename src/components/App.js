import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserInfo} from "../redux/user/userOperations";
import {getIsLoading, getIsLoggedIn} from "../redux/auth/authSelectors";
import {getIsOpenModal} from "../redux/dailyCalorieIntake/dailyCalorieIntake-selectors";
import {isOpenModal} from "../redux/dailyCalorieIntake/dailyCalorieIntakeSlice";
import MainPage from "../pages/mainPage/MainPage";
import LoginPage from "../pages/loginPage";
import SharedLayout from "./sharedLayout";
import RegistrationPage from "../pages/registrationPage/RegistrationPage";
import LoadingSpinner from "./loadingSpinner/LoadingSpinner";
import {ToastContainer} from 'react-toastify';
import DairyPage from "../pages/dairyPage";
import CalculatorPage from "../pages/calculatorPage";
import Modal from "./modal";
import HeadTitle from "./headTitle";
import DailyCalorieIntake from "./dailyCalorieIntake";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
    const [dailyRate, setDailyRate] = useState({});
    const dispatch = useDispatch();
    const showModal = useSelector(getIsOpenModal);
    const isLoading = useSelector(getIsLoading);
    const isLoggedIn = useSelector(getIsLoggedIn);

    useEffect(() => {
        isLoggedIn && dispatch(getCurrentUserInfo());
    }, [dispatch, isLoggedIn])

    const toggleModal = () => {
        dispatch(isOpenModal(!showModal));
    }

    return (
        <>
            {isLoading ? <LoadingSpinner/> :
                <Routes>
                    <Route path="/" element={<SharedLayout/>}>
                        <Route index path="/"
                               element={<PublicRoute redirectTo="/dairy" component={<MainPage toggleModal={toggleModal}
                                                                                              setDailyRate={setDailyRate}/>}/>}
                        />
                        <Route path="/login" element={<PublicRoute redirectTo="/dairy" component={<LoginPage/>}/>}/>
                        <Route path="/registration"
                               element={<PublicRoute redirectTo="/dairy" component={<RegistrationPage/>}/>}/>
                        <Route path="/dairy"
                               element={<PrivateRoute redirectTo="/login" component={<DairyPage/>}/>}
                        />
                        <Route path="/calculator"
                               element={<PrivateRoute redirectTo="/login"
                                                      component={<CalculatorPage toggleModal={toggleModal}
                                                                                 setDailyRate={setDailyRate}/>}/>}
                        />
                    </Route>
                </Routes>
            }
            {showModal &&
                <Modal toggleModal={toggleModal}>
                    <HeadTitle>Your recommended daily calorie intake is</HeadTitle>
                    <DailyCalorieIntake userDailyRate={dailyRate} toggleModal={toggleModal}/>
                </Modal>}
            <ToastContainer/>
        </>
    );
}

export default App;
