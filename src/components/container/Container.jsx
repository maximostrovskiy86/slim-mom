import {DefaultContainer} from "./Container.styled.";

const Container = ({ children }) => {
    return (
        <DefaultContainer className="container">
            {children}
        </DefaultContainer>
    )
}

export default Container;