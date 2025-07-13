import {ProductsList} from "./DiaryProductList.styled";
import DiaryProductsListItem from "../diaryProductsListItem";

const DiaryProductsList = ({productsList, onDeleteProduct}) => {
    
    return (
        <ProductsList>
            {productsList?.map((item, index) => {
                return <DiaryProductsListItem key={item.id} eatenProduct={item} index={index} onDeleteProduct={onDeleteProduct}/>
            })}
        </ProductsList>
    )
}

export default DiaryProductsList;