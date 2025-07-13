import {HeadTitleStyle} from "./HeadTitle.styled";


const HeadTitle = ({children}) => {
	return (
		<HeadTitleStyle>
			{children}
		</HeadTitleStyle>
	)
}
export default HeadTitle;