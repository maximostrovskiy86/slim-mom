import {DiaryProductItem} from './DiaryProductsListItem.styled';
import {ImCross} from "react-icons/im";

const DiaryProductsListItem = ({eatenProduct, index, onDeleteProduct}) => {
    const {title, weight, kcal, id} = eatenProduct;
    
    return (
        <DiaryProductItem>
            {index + 1}
            <span className='title'>{title}</span>
            <span className='weight'>{weight} g</span>
            <span className='kcal'>{Math.round(kcal)} kcal</span>
            <ImCross className='icon-cross' size="1.25em" color="#9B9FAA" onClick={() => onDeleteProduct(id)}/>
        </DiaryProductItem>
    )
}
/* ???*/
export default DiaryProductsListItem;