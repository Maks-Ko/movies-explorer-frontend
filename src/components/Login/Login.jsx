import React, { useCallback, useEffect, useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";


const validators = {
    userName: {
        required: (value) => { return value === ''; },
        minlength: (value) => { return value.length < 2; },
    },
    email: {
        required: (value) => { return value === ''; },
        isEmail: (value) => { return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value) },
    },
    password: {
        required: (value) => { return value === ''; },
        minlength: (value) => { return value.length < 10; },
    }
}

function Login(props) {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: {
            required: true,
            isEmail: true
        },
        password: {
            required: true,
            minlength: true
        }
    });

    const [isClickInput, setIsClickInput] = useState({
        email: false,
        password: false
    });

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [name]: value }));
    }, [setFormValues]);

    const handleClickInputEmail = () => {
        setIsClickInput({ email: true });
    }

    const handleClickInputPassword = () => {
        setIsClickInput({ password: true });
    }

    useEffect(function validateInput() {
        const { email, password } = formValues;

        const emailValidationResalt = Object.keys(validators.email).map(
            errorKey => {
                const errorResult = validators.email[errorKey](email);

                return { [errorKey]: errorResult }
            }
        ).reduce((acc, el) => ({ ...acc, ...el }), {});

        const passwordValidationResalt = Object.keys(validators.password).map(
            errorKey => {
                const errorResult = validators.password[errorKey](password);

                return { [errorKey]: errorResult }
            }
        ).reduce((acc, el) => ({ ...acc, ...el }), {});

        setErrors({
            email: emailValidationResalt,
            password: passwordValidationResalt,
        });

    }, [formValues, setErrors])

    const { email, password } = formValues;
    const isEmailInvalid = Object.values(errors.email).some(Boolean);
    const isPasswordInvalid = Object.values(errors.password).some(Boolean);
    const isSubmitDisabled = isEmailInvalid || isPasswordInvalid;

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formValues;
        props.onLogin({ email, password });
    }

    return (
        <>
            <PageWithForm
                title="???????? ????????????!"
                textButton="??????????"
                text="?????? ???? ?????????????????????????????????"
                link="/signup"
                linkText="??????????????????????"
                onSubmit={handleSubmit}
                isSubmitDisabled={isSubmitDisabled}
                isbuttonDisabled={isSubmitDisabled ? "form__button_is-disabled" : ""}
            >
                <span htmlFor="email" className="form__text-span">E-mail</span>
                <input id="email" name="email" type="email" value={email || ''} onChange={handleInputChange} onClick={handleClickInputEmail} className="form__text-input" placeholder="E-mail" requiredminlength="2" maxLength="40" />
                <div className="form__block-errors">
                    {errors.email.required && isClickInput.email && <span className="form__text-error">???????????????????????? ????????.</span>}
                    {errors.email.isEmail && isClickInput.email && <span className="form__text-error">???????????????? ???????????? ??????????.</span>}
                </div>

                <span htmlFor="password" className="form__text-span">????????????</span>
                <input id="password" name="password" type="password" value={password || ''} onChange={handleInputChange} onClick={handleClickInputPassword} className="form__text-input" placeholder="????????????" requiredminlength="7" maxLength="200" />
                <div className="form__block-errors">
                    {errors.password.required && isClickInput.password && <span className="form__text-error">???????????????????????? ????????.</span>}
                    {errors.password.minlength && isClickInput.password && <span className="form__text-error">?????????????????????? ???????????? 10 ??????????????.</span>}
                </div>

                <div className="form__block-errors_button">
                    {props.errRespons && <span className="form__text-error form__text-error_button">{`${props.errRespons}` === '????????????: 401' ? '???????????????????????? ?????????? ?????? ????????????' : '??????-???? ?????????? ???? ??????, ???????????????????? ???? ??????????'}</span>}
                </div>
            </PageWithForm>
        </>
    )
}

export default Login;