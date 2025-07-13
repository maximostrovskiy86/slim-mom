import React, {useEffect, useState, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import {toast} from "react-toastify";
import {DairyPageContainer} from "./DairyPage.styled";
import DiaryDateCalendar from "../../components/diaryDateСalendar/DiaryDateСalendar";
import Button from "../../components/button";
import Modal from "../../components/modal";
import DiaryAddProductForm from "../../components/diaryAddProductForm";
import DiaryProductsList from "../../components/diaryProductList";
import {getUserData, getUserEatenProductsForDay, getDayId} from "../../redux/user/userSelectors";
import {deleteUserProductByDay, getUserOneDayInfo} from "../../redux/user/userOperations";
import {getIsLoggedIn} from "../../redux/auth/authSelectors";
import moment from "moment/moment";
import {useMediaPredicate} from "react-media-hook";


const DairyPage = () => {
    const [date, setDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsList = useSelector(getUserEatenProductsForDay);
    const userDate = useSelector(getUserData);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const dayId = useSelector(getDayId);
    const biggerThan768 = useMediaPredicate("(min-width: 768px)");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const selectedDate = moment(date).format("YYYY-MM-DD");
        dispatch(getUserOneDayInfo(selectedDate))

    }, [date, dispatch]);

    const toggleModal = () => {
        setIsOpen(prev => !prev);
    }

    const onDeleteProduct = (idProduct) => {
        dispatch(deleteUserProductByDay({
            dayId: dayId,
            eatenProductId: idProduct,
        }));
    }

    const enterUserInitialValues = () => {
        if (!userDate && isLoggedIn) {
            toast.warning(`Enter the initial parameters of the user value`);
            navigate("/calculator", {replace: true});
        }

        return true;
    }

    return (
        <DairyPageContainer>
            <DiaryDateCalendar selectDate={setDate} elemDate={date}/>
            {biggerThan768 && <DiaryAddProductForm date={date}/>}
            <DiaryProductsList productsList={productsList} onDeleteProduct={onDeleteProduct}/>
            {!biggerThan768 &&
                <Button type="button" onClick={toggleModal}>
                    <FaPlus/>
                </Button>
            }
            {enterUserInitialValues() && isOpen && !biggerThan768 &&
                <Modal toggleModal={toggleModal}>
                    <DiaryAddProductForm date={date}/>
                </Modal>
            }
        </DairyPageContainer>
    )
}

export default DairyPage;