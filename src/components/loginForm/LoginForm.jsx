import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {LoginFormContainer, LoginInputBox} from "./LoginForm.styled";
import Button from "../button";
import authOperations from "../../redux/auth/authOperations";
import {toast} from "react-toastify";


const LoginForm = () => {
    const [email, setEmail] = useState("cara@car.com");
    const [password, setPassword] = useState("2wsx@WSX");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onHandleChange = e => {
        const {value, name} = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }

    const notifyIncorrectUser = (email) => toast.error(`Incorrect password or ${email}`);


    const onSubmit = async (e) => {
        e.preventDefault();
        const {payload} = await dispatch(authOperations.login({
            email: email,
            password: password,
        }));

        setEmail('');
        setPassword('');

        if (payload.status === 403) {
            notifyIncorrectUser(email)
            return;
        }

        if (payload.status === 200) {
            navigate("/calculator", {replace: true});
        }
    }

    return (
        <LoginFormContainer onSubmit={onSubmit}>
            <LoginInputBox>
                <input
                    id="login"
                    type="email"
                    name="email"
                    required
                    minLength="3"
                    maxLength="30"
                    value={email}
                    title="Email must contain the @ symbol and be in the format example@mail.com"
                    onChange={onHandleChange}
                />
                <label htmlFor="login">Login</label>
            </LoginInputBox>
            <LoginInputBox>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    required
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
                    onChange={onHandleChange}
                />
                <label htmlFor="password">Password</label>
            </LoginInputBox>
            <Button>Login</Button>
        </LoginFormContainer>

    )
}

export default LoginForm;