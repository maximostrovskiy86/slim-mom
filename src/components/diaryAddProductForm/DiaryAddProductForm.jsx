import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DiaryAddProductFormContainer} from "./DiaryAddProductFormStyled";
import moment from "moment";
import {InputBox} from "../calculatorForm/CalculatorForm.styled";
import Button from "../button";
import {addUserProductByDay, searchUserProductByDay} from "../../redux/user/userOperations";
import {getUserData} from "../../redux/user/userSelectors";
import {FaPlus} from "react-icons/fa";
import {useMediaPredicate} from "react-media-hook";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


const DiaryAddProductForm = ({date, setIsOpen}) => {
	const [nameProduct, setNameProduct] = useState("");
	const [products, setProducts] = useState([]);
	const [weight, setWeight] = useState('');
	const dispatch = useDispatch();
	const biggerThan768 = useMediaPredicate("(min-width: 768px)");
	const userData = useSelector(getUserData);
	const navigate = useNavigate();
	
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'productName':
				setNameProduct(value);
				break;
			case 'weight':
				setWeight(value);
				break;
			default:
				return;
		}
	}
	
	const onHandleSearch = async (e) => {
		const target = e.target.value;
		
		if (!userData.dailyRate) {
			toast.error("Please, count your daily rate first");
			
			setTimeout(() => {
				navigate("/calculator", {replace: true});
			}, 1500)
			
		}
		
		if (target.length > 2) {
			const {payload} = await dispatch(searchUserProductByDay(target));
			
			if (payload.status === 400) {
				toast.error(payload.response.data.message);
				return
			}
			
			setProducts(payload);
		}
	}
	
	const onSubmit = (e) => {
		e.preventDefault()
		const customDate = moment(date).format("YYYY-MM-DD");
		
		dispatch(addUserProductByDay({
			date: customDate,
			productId: findSelectedProduct(nameProduct),
			weight: Number(weight)
		}))
		
		setNameProduct("");
		setWeight("");
		
		setIsOpen(false);
	}
	
	const findSelectedProduct = (valueProduct) => {
		const result = products?.find(product => product.title.en === valueProduct);
		
		if (result) {
			return result._id;
		}
	}
	
	return (
		<DiaryAddProductFormContainer onSubmit={onSubmit}>
			<InputBox className="add-product-item">
				<input
					id="productName"
					type="text"
					name="productName"
					list="products"
					required
					value={nameProduct}
					title="Email must contain the @ symbol and be in the format example@mail.com"
					onInput={onHandleSearch}
					onChange={onHandleChange}
				/>
				<label htmlFor="productName">Enter product name</label>
				<datalist id="products">
					{products.length > 0 && products.map((item) => (
						<option key={item._id}>{item.title.en}</option>
					))}
				</datalist>
			</InputBox>
			<InputBox className="add-product-item">
				<input
					id="weight"
					type="number"
					name="weight"
					required
					value={weight}
					title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
					onChange={onHandleChange}
				/>
				<label htmlFor="weight">Grams</label>
			</InputBox>
			<Button>
				{biggerThan768 ? <FaPlus/> : "Add"}
			</Button>
		</DiaryAddProductFormContainer>
	)
}

export default DiaryAddProductForm;